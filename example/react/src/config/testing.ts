import { AvailableLanguages, store } from './i18n'
import { setLanguage as _setLanguage } from '@i18nlite/testing'

export function setLanguage(language: AvailableLanguages) {
  _setLanguage(store, language)
}
