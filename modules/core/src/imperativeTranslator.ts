import { formatText } from './format'
import { I18nStore } from './I18nStore'
import { Translator } from './Translator'

export function createImperativeTranslator<
  Language extends string,
  Literals extends Record<string, string>,
>(
  store: I18nStore<Language>,
  literals: Record<Language, Literals>,
): Translator<Literals> {
  return (literal, ...args) => {
    const langLiterals = literals[store.language]
    return formatText(langLiterals[literal] ?? literal, ...args)
  }
}
