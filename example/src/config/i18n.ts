import { I18nStore, makeI18n } from 'react-i18n-lite'

export type AvailableLanguages = 'en-us' | 'pt-br'

export const languages: AvailableLanguages[] = ['en-us', 'pt-br']

export const store = new I18nStore(languages[0])

export const { useLanguage, useTranslate } = makeI18n(store)
