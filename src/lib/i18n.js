import I18n from 'i18n-js';
import translations from './translations'

const getPreferredLanguage = () => {
  const browserLanguage =
    (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage ||
    'en';

  return 'nl';
  // return browserLanguage.slice(0, 2);
}

// Set I18n global settings
I18n.defaultLocale = 'en';
I18n.locale = getPreferredLanguage();
I18n.translations = translations;

// Translation helpers
export const t = I18n.t;

export const namespacedTranslation = (namespace) => {
  return (scope, options = {}) => {
    if(scope[0] !== '.')
      return I18n.t(scope, options);

    scope = scope.substring(1);
    options = {
      ...options,
      defaults: (options.defaults || []).map(d =>
        d.scope ? {scope: [namespace, d.scope].join('.')} : d
      )
    };

    return I18n.t([namespace, scope].join('.'), options);
  };
};
