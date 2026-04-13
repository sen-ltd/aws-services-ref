import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  SERVICES,
  CATEGORIES,
  findByAbbrev,
  searchServices,
  filterByCategory,
  getByCategory,
} from '../src/services.js';

// ── SERVICES array ────────────────────────────────────────────────────────────

describe('SERVICES', () => {
  it('has 50 or more services', () => {
    assert.ok(SERVICES.length >= 50, `Expected ≥50 services, got ${SERVICES.length}`);
  });

  it('every service has required fields: id, abbrev, name, category, description, useCases', () => {
    for (const s of SERVICES) {
      assert.ok(s.id,          `Service missing id: ${JSON.stringify(s)}`);
      assert.ok(s.abbrev,      `Service ${s.id} missing abbrev`);
      assert.ok(s.name,        `Service ${s.id} missing name`);
      assert.ok(s.category,    `Service ${s.id} missing category`);
      assert.ok(s.description, `Service ${s.id} missing description`);
      assert.ok(s.useCases,    `Service ${s.id} missing useCases`);
    }
  });

  it('every service description has ja and en keys', () => {
    for (const s of SERVICES) {
      assert.ok(typeof s.description.ja === 'string', `${s.id} missing description.ja`);
      assert.ok(typeof s.description.en === 'string', `${s.id} missing description.en`);
    }
  });

  it('every service useCases has ja and en arrays', () => {
    for (const s of SERVICES) {
      assert.ok(Array.isArray(s.useCases.ja), `${s.id} useCases.ja is not an array`);
      assert.ok(Array.isArray(s.useCases.en), `${s.id} useCases.en is not an array`);
      assert.ok(s.useCases.ja.length > 0, `${s.id} useCases.ja is empty`);
      assert.ok(s.useCases.en.length > 0, `${s.id} useCases.en is empty`);
    }
  });

  it('all service IDs are unique', () => {
    const ids = SERVICES.map((s) => s.id);
    const unique = new Set(ids);
    assert.strictEqual(ids.length, unique.size, 'Duplicate service IDs found');
  });

  it('all service categories reference a valid CATEGORY id', () => {
    const validIds = new Set(CATEGORIES.map((c) => c.id));
    for (const s of SERVICES) {
      assert.ok(validIds.has(s.category), `Service ${s.id} has unknown category "${s.category}"`);
    }
  });

  it('contains well-known AWS services by abbreviation', () => {
    const abbrevs = SERVICES.map((s) => s.abbrev.toLowerCase());
    const mustHave = ['ec2', 's3', 'rds', 'lambda', 'dynamodb', 'iam', 'vpc', 'cloudfront'];
    for (const a of mustHave) {
      assert.ok(abbrevs.includes(a), `Missing service with abbrev "${a}"`);
    }
  });
});

// ── CATEGORIES array ──────────────────────────────────────────────────────────

describe('CATEGORIES', () => {
  it('has at least 8 categories', () => {
    assert.ok(CATEGORIES.length >= 8, `Expected ≥8 categories, got ${CATEGORIES.length}`);
  });

  it('every category has id, name.ja, name.en', () => {
    for (const c of CATEGORIES) {
      assert.ok(c.id,            `Category missing id`);
      assert.ok(c.name?.ja,      `Category ${c.id} missing name.ja`);
      assert.ok(c.name?.en,      `Category ${c.id} missing name.en`);
    }
  });

  it('every category is referenced by at least one service', () => {
    const usedCats = new Set(SERVICES.map((s) => s.category));
    for (const c of CATEGORIES) {
      assert.ok(usedCats.has(c.id), `Category "${c.id}" has no services`);
    }
  });
});

// ── findByAbbrev ──────────────────────────────────────────────────────────────

describe('findByAbbrev', () => {
  it('finds EC2 by exact abbreviation', () => {
    const s = findByAbbrev('EC2');
    assert.ok(s, 'EC2 not found');
    assert.strictEqual(s.id, 'ec2');
  });

  it('finds S3 by lowercase', () => {
    const s = findByAbbrev('s3');
    assert.ok(s, 'S3 not found');
    assert.strictEqual(s.id, 's3');
  });

  it('is case-insensitive', () => {
    const upper = findByAbbrev('IAM');
    const lower = findByAbbrev('iam');
    assert.ok(upper, 'IAM not found with uppercase');
    assert.ok(lower, 'IAM not found with lowercase');
    assert.strictEqual(upper.id, lower.id);
  });

  it('returns undefined for unknown abbreviation', () => {
    const s = findByAbbrev('DOESNOTEXIST99');
    assert.strictEqual(s, undefined);
  });

  it('finds Lambda', () => {
    const s = findByAbbrev('lambda');
    assert.ok(s);
    assert.strictEqual(s.id, 'lambda');
  });

  it('finds RDS', () => {
    const s = findByAbbrev('rds');
    assert.ok(s);
    assert.strictEqual(s.id, 'rds');
  });
});

// ── searchServices ────────────────────────────────────────────────────────────

describe('searchServices', () => {
  it('returns all services with empty query', () => {
    const results = searchServices('', 'en');
    assert.strictEqual(results.length, SERVICES.length);
  });

  it('returns all services with whitespace-only query', () => {
    const results = searchServices('   ', 'en');
    assert.strictEqual(results.length, SERVICES.length);
  });

  it('finds service by exact abbreviation (case-insensitive)', () => {
    const results = searchServices('ec2', 'en');
    assert.ok(results.some((s) => s.id === 'ec2'));
  });

  it('finds service by full name', () => {
    const results = searchServices('DynamoDB', 'en');
    assert.ok(results.some((s) => s.id === 'dynamodb'));
  });

  it('finds services matching English description keyword', () => {
    const results = searchServices('storage', 'en');
    assert.ok(results.length > 0);
    // S3 description contains "storage"
    assert.ok(results.some((s) => s.id === 's3'));
  });

  it('finds services matching Japanese description keyword', () => {
    const results = searchServices('仮想サーバ', 'ja');
    assert.ok(results.length > 0);
    assert.ok(results.some((s) => s.id === 'ec2'));
  });

  it('finds services by use case keyword', () => {
    const results = searchServices('batch', 'en');
    assert.ok(results.length > 0);
  });

  it('finds services by category keyword', () => {
    const results = searchServices('compute', 'en');
    assert.ok(results.length > 0);
  });

  it('returns empty array for unmatched query', () => {
    const results = searchServices('xyzzy_no_match_9999', 'en');
    assert.strictEqual(results.length, 0);
  });

  it('search is case-insensitive for English', () => {
    const lower = searchServices('lambda', 'en');
    const upper = searchServices('LAMBDA', 'en');
    assert.strictEqual(lower.length, upper.length);
    assert.ok(lower.some((s) => s.id === 'lambda'));
  });

  it('finds SageMaker by partial name', () => {
    const results = searchServices('sage', 'en');
    assert.ok(results.some((s) => s.id === 'sagemaker'));
  });

  it('finds Bedrock', () => {
    const results = searchServices('bedrock', 'en');
    assert.ok(results.some((s) => s.id === 'bedrock'));
  });
});

// ── filterByCategory ──────────────────────────────────────────────────────────

describe('filterByCategory', () => {
  it('returns all services for "all"', () => {
    const results = filterByCategory('all');
    assert.strictEqual(results.length, SERVICES.length);
  });

  it('returns all services for null/undefined', () => {
    assert.strictEqual(filterByCategory(null).length, SERVICES.length);
    assert.strictEqual(filterByCategory(undefined).length, SERVICES.length);
    assert.strictEqual(filterByCategory('').length, SERVICES.length);
  });

  it('filters to compute only', () => {
    const results = filterByCategory('compute');
    assert.ok(results.length > 0);
    assert.ok(results.every((s) => s.category === 'compute'));
    assert.ok(results.some((s) => s.id === 'ec2'));
  });

  it('filters to database only', () => {
    const results = filterByCategory('database');
    assert.ok(results.length > 0);
    assert.ok(results.every((s) => s.category === 'database'));
    assert.ok(results.some((s) => s.id === 'rds'));
    assert.ok(results.some((s) => s.id === 'dynamodb'));
  });

  it('filters to security only', () => {
    const results = filterByCategory('security');
    assert.ok(results.length > 0);
    assert.ok(results.every((s) => s.category === 'security'));
    assert.ok(results.some((s) => s.id === 'iam'));
  });

  it('returns empty for non-existent category', () => {
    const results = filterByCategory('nonexistent-category-xyz');
    assert.strictEqual(results.length, 0);
  });

  it('results are a new array (not mutating SERVICES)', () => {
    const results = filterByCategory('compute');
    results.push({ id: 'fake' });
    assert.ok(!SERVICES.some((s) => s.id === 'fake'));
  });
});

// ── getByCategory ─────────────────────────────────────────────────────────────

describe('getByCategory', () => {
  it('returns an object with category ids as keys', () => {
    const groups = getByCategory();
    assert.ok(typeof groups === 'object');
    assert.ok(groups.compute, 'missing compute group');
    assert.ok(groups.storage, 'missing storage group');
    assert.ok(groups.database, 'missing database group');
    assert.ok(groups.security, 'missing security group');
  });

  it('each group contains only services of that category', () => {
    const groups = getByCategory();
    for (const [catId, services] of Object.entries(groups)) {
      assert.ok(services.every((s) => s.category === catId),
        `Group "${catId}" contains service from another category`);
    }
  });

  it('total count across groups equals SERVICES.length', () => {
    const groups = getByCategory();
    const total = Object.values(groups).reduce((sum, arr) => sum + arr.length, 0);
    assert.strictEqual(total, SERVICES.length);
  });

  it('compute group includes EC2', () => {
    const groups = getByCategory();
    assert.ok(groups.compute.some((s) => s.id === 'ec2'));
  });

  it('storage group includes S3', () => {
    const groups = getByCategory();
    assert.ok(groups.storage.some((s) => s.id === 's3'));
  });

  it('ml group includes SageMaker and Bedrock', () => {
    const groups = getByCategory();
    assert.ok(groups.ml.some((s) => s.id === 'sagemaker'));
    assert.ok(groups.ml.some((s) => s.id === 'bedrock'));
  });
});
