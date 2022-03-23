import { formatText, I18nStore, Translator } from '@i18nlite/core'
import { derived, Readable } from 'svelte/store'

export function makeI18n<T extends string>(store: I18nStore<T>) {
  const languageStore: Readable<T> = {
    subscribe(subscriber) {
      subscriber(store.language)
      return store.subscribe(subscriber)
    },
  }

  function useTranslate<L extends Record<string, string>>(
    literals: Record<T, L>,
  ): Readable<Translator<L>> {
    const literalsStore = derived(languageStore, (lang) => literals[lang])
    return derived(
      literalsStore,
      (langLiterals) =>
        (literal: keyof L, ...args: unknown[]) =>
          formatText(langLiterals[literal] ?? literal, ...args),
    )
  }

  function useLanguage() {
    const changeLanguage = (lang: T) => store.changeLanguage(lang)
    return [languageStore, changeLanguage] as [
      Readable<T>,
      typeof changeLanguage,
    ]
  }

  return { useLanguage, useTranslate }
}
