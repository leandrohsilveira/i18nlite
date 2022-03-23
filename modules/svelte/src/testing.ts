import { I18nStore } from '@i18nlite/core'
import { setLanguage as _setLanguage } from '@i18nlite/testing'
import { makeI18n } from './makeI18n'

export type Languages = 'pt-br' | 'en-us'

export const store = new I18nStore<Languages>('pt-br')

export const { useLanguage, useTranslate } = makeI18n(store)

export function setLanguage(lang: Languages) {
  _setLanguage(store, lang)
}
