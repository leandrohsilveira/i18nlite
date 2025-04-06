import { I18nStore } from '@i18nlite/core'
import { makeI18n } from './i18n'

/** @typedef {'pt-br' | 'en-us'} Languages */

export const store = new I18nStore(['pt-br', 'en-us'], 'pt-br')
export const { useLanguage, useTranslate } = makeI18n(store)

/**
 * @param {Languages} lang
 */
export function setLanguage(lang) {
  store.changeLanguage(lang, false)
}
