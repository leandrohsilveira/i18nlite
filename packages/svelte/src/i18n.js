/**
 * @import { Translator } from "@i18nlite/core"
 * @import { Readable } from "svelte/store"
 */
import { formatText, I18nStore } from '@i18nlite/core'
import { derived } from 'svelte/store'

/**
 * @template {string} T
 * @param {I18nStore<T>} store
 */
export function makeI18n(store) {
  /**
   * @type {Readable<T>}
   */
  const languageStore = {
    subscribe(subscriber) {
      subscriber(store.language)
      return store.subscribe(subscriber)
    },
  }

  /**
   * @template {Record<string, string>} L
   * @param {Record<T, L>} literals
   * @returns {Readable<Translator<L>> }
   */
  function useTranslate(literals) {
    const literalsStore = derived(languageStore, (lang) => literals[lang])
    return derived(
      literalsStore,
      (langLiterals) =>
        /**
         * @param {keyof L} literal
         * @param {...unknown} args
         */
        (literal, ...args) =>
          formatText(langLiterals[literal] ?? literal, ...args),
    )
  }

  function useLanguage() {
    /**
     * @param {T} lang
     */
    const changeLanguage = (lang) => store.changeLanguage(lang)
    return /** @type {[ Readable<T>, typeof changeLanguage ]} */ ([
      languageStore,
      changeLanguage,
    ])
  }

  return { useLanguage, useTranslate }
}
