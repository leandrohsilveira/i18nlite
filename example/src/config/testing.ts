import { AvailableLanguages, store } from './i18n'
import { setLanguage as _setLanguage } from 'react-i18n-lite/testing'

export function setLanguage(language: AvailableLanguages) {
  _setLanguage(store, language)
}
