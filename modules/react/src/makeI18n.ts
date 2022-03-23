import { useCallback, useEffect, useMemo, useState } from 'react'
import { formatText, I18nStore, Translator } from '@i18nlite/core'

export function makeI18n<T extends string>(store: I18nStore<T>) {
  function useLanguage() {
    const [language, setLanguage] = useState(store.language)

    useEffect(() => store.subscribe(setLanguage), [setLanguage])

    const changeLanguage = useCallback(
      (lang: T) => store.changeLanguage(lang),
      [],
    )

    return [language, changeLanguage] as [T, typeof changeLanguage]
  }

  function useTranslate<L extends Record<string, string>>(
    literals: Record<T, L>,
  ): Translator<L> {
    const [lang] = useLanguage()
    const langLiterals = useMemo(() => literals[lang], [lang, literals])
    return useCallback(
      (literal: keyof L, ...args: unknown[]) =>
        formatText(langLiterals[literal] ?? literal, ...args),
      [langLiterals],
    )
  }

  return { useLanguage, useTranslate }
}
