import { useCallback, useEffect, useMemo, useState } from 'react'
import { I18nStore } from './I18nStore'

export type Translator<T> = (literal: keyof T, ...args: unknown[]) => string

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
        args.reduce<string>(
          (acc, arg, index) => acc.replaceAll(`{${index}}`, String(arg)),
          langLiterals[literal] ?? literal,
        ),
      [langLiterals],
    )
  }

  return { useLanguage, useTranslate }
}
