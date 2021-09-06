import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import memoize from 'lodash.memoize';

import en from './en';
import ru from './ru';

i18n.translations = {
  en,
  ru,
};

i18n.defaultLocale = 'en';
i18n.fallbacks = true;
i18n.locale = Localization.locale;

export const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);
