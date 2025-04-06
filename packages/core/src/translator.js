/**
 * @import { Translator } from './types.js'
 */
import { formatText } from './format'
import { I18nStore } from './store'

/**
 * @template {string} Language
 * @template {Record<string, string>} Literals
 * @param {I18nStore<Language>} store
 * @param {Record<Language, Literals>} literals
 * @returns {Translator<Literals>}
 */
export function createImperativeTranslator(store, literals) {
  return (literal, ...args) => {
    const langLiterals = literals[store.language]
    return formatText(langLiterals[literal] ?? literal, ...args)
  }
}
