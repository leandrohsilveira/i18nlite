import * as React from 'react'
import { ChangeEvent, useCallback } from 'react'
import {
  AvailableLanguages,
  languages,
  useLanguage,
  useTranslate,
} from '../config/i18n'
import i18n from './i18n.json'

export function ChangeLanguage() {
  const [language, changeLanguage] = useLanguage()

  const t = useTranslate(i18n)

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      changeLanguage(e.target.value as AvailableLanguages)
    },
    [changeLanguage],
  )

  return (
    <select value={language} onChange={handleChange}>
      {languages.map((lang) => (
        <option key={lang} value={lang}>
          {t(lang)}
        </option>
      ))}
    </select>
  )
}
