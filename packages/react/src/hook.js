/**
 * @import { Translator } from "@i18nlite/core"
 */
import { useCallback, useEffect, useMemo, useState } from 'react'
import { formatText, I18nStore } from '@i18nlite/core'

/**
 * @template {string} T
 * @param {I18nStore<T>} store
 */
export function makeI18n(store) {
  function useLanguage() {
    const [language, setLanguage] = useState(store.language)

    useEffect(() => store.subscribe(setLanguage), [setLanguage])

    const changeLanguage = useCallback(
      /**
       * @param {T} lang
       */
      (lang) => store.changeLanguage(lang),
      [],
    )

    return /** @type {[T, typeof changeLanguage]} */ ([
      language,
      changeLanguage,
    ])
  }

  /**
   * @template {Record<string, string>} L
   * @param {Record<T, L>} literals
   * @returns {Translator<L>}
   */
  function useTranslate(literals) {
    const [lang] = useLanguage()
    const langLiterals = useMemo(() => literals[lang], [lang, literals])
    return useCallback(
      /**
       * @param {keyof L} literal
       * @param {...unknown} args
       */
      (literal, ...args) =>
        formatText(langLiterals[literal] ?? literal, ...args),
      [langLiterals],
    )
  }

  return { useLanguage, useTranslate }
}
