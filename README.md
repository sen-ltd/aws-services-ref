# AWS Services Reference

Searchable AWS services reference with 60+ services, abbreviations, categories, and bilingual JP/EN descriptions.

**Live demo**: https://sen.ltd/portfolio/aws-services-ref/

## Features

- **60+ AWS services** with full names, abbreviations (EC2, S3, Lambda…), and descriptions
- **10 categories**: Compute, Storage, Database, Networking, Security, Analytics, ML, Developer Tools, Messaging, Serverless
- **Search** by name, abbreviation, description, or use case (bilingual)
- **Category filter chips** for quick navigation
- **Expandable cards** showing use cases, related services, and launch year
- **Bilingual** Japanese / English UI and descriptions
- **Dark / Light theme** with localStorage persistence
- **Zero dependencies** — vanilla JS ES modules, no build step

## Getting Started

```bash
# Serve locally
npm run serve
# → http://localhost:8080

# Run tests
npm test
```

## File Structure

```
├── index.html          # App shell
├── style.css           # All styles (CSS custom properties, dark/light)
├── src/
│   ├── main.js         # DOM rendering, search, filter, event handlers
│   ├── services.js     # 60+ service entries + utility functions
│   └── i18n.js         # Bilingual UI strings (ja/en)
├── tests/
│   └── services.test.js  # 41 tests (Node built-in test runner)
└── assets/             # Screenshots and promotional assets
```

## Service Data Shape

```js
{
  id: 'ec2',
  abbrev: 'EC2',
  name: 'Amazon Elastic Compute Cloud',
  category: 'compute',            // matches a CATEGORIES entry
  description: { ja: '…', en: '…' },
  useCases: { ja: ['…'], en: ['…'] },
  launched: 2006,                 // optional
  related: ['ebs', 'vpc', '…'],   // optional, references other service IDs
}
```

## License

MIT © 2026 [SEN LLC (SEN 合同会社)](https://sen.ltd)

<!-- sen-publish:links -->
## Links

- 🌐 Demo: https://sen.ltd/portfolio/aws-services-ref/
- 📝 dev.to: https://dev.to/sendotltd/a-searchable-aws-services-reference-with-67-services-and-bilingual-descriptions-3f90
<!-- /sen-publish:links -->
