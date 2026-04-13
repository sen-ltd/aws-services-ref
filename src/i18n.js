export const I18N = {
  en: {
    title: 'AWS Services Reference',
    subtitle: '60+ AWS services with search, categories, and bilingual descriptions',
    searchPlaceholder: 'Search services… (e.g. Lambda, storage, database)',
    searchLabel: 'Search AWS services',
    filterLabel: 'Filter by category',
    all: 'All',
    serviceCount: (n) => `${n} service${n === 1 ? '' : 's'}`,
    noResults: 'No services found',
    noResultsHint: 'Try a different search term or category',
    launched: 'Launched',
    useCases: 'Use Cases',
    related: 'Related Services',
    themeLight: 'Light mode',
    themeDark: 'Dark mode',
    langToggle: '日本語',
    category: 'Category',
    closeCard: 'Close',
  },
  ja: {
    title: 'AWS サービス一覧',
    subtitle: '60+ サービスを検索・カテゴリ別フィルタ。日英対応',
    searchPlaceholder: 'サービスを検索… (例: Lambda、ストレージ、データベース)',
    searchLabel: 'AWS サービスを検索',
    filterLabel: 'カテゴリでフィルタ',
    all: 'すべて',
    serviceCount: (n) => `${n} 件`,
    noResults: 'サービスが見つかりません',
    noResultsHint: '別のキーワードまたはカテゴリを試してください',
    launched: 'リリース年',
    useCases: '主な用途',
    related: '関連サービス',
    themeLight: 'ライトモード',
    themeDark: 'ダークモード',
    langToggle: 'English',
    category: 'カテゴリ',
    closeCard: '閉じる',
  },
};

/**
 * Get translation string for the given language.
 * @param {'en'|'ja'} lang
 * @param {string} key
 * @param {...any} args
 * @returns {string}
 */
export function t(lang, key, ...args) {
  const val = I18N[lang]?.[key] ?? I18N.en[key];
  if (typeof val === 'function') return val(...args);
  return val ?? key;
}
