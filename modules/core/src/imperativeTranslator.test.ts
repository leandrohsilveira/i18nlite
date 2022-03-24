import { I18nStore } from './I18nStore'
import { Translator } from './Translator'
import { createImperativeTranslator } from './imperativeTranslator'

describe('imperativeTranslator function', () => {
  type Languages = 'pt-br' | 'en-us'

  const literals = {
    'pt-br': {
      text: 'Texto {0}',
      withParam: 'com parâmetro',
    },
    'en-us': {
      text: 'Text {0}',
      withParam: 'with parameter',
    },
  }

  let store: I18nStore<Languages>
  let t: Translator<typeof literals['pt-br']>

  beforeEach(() => {
    store = new I18nStore<Languages>('pt-br')
    t = createImperativeTranslator(store, literals)
  })

  test('Should translate to the current language', () => {
    const result = t('text', t('withParam'))
    expect(result).toEqual(
      literals['pt-br'].text.replace('{0}', literals['pt-br'].withParam),
    )
  })

  test('Should translate to the language after switch it', () => {
    store.changeLanguage('en-us')

    const result = t('text', t('withParam'))
    expect(result).toEqual(
      literals['en-us'].text.replace('{0}', literals['en-us'].withParam),
    )
  })
})
