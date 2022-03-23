import { I18nStore } from '@i18nlite/core'
import { makeI18n } from '@i18nlite/svelte'

export type AvailableLanguages = 'en-us' | 'pt-br'

export const languages: AvailableLanguages[] = ['en-us', 'pt-br']

export const store = new I18nStore(languages[0])

export const { useLanguage, useTranslate } = makeI18n(store)
