import { I18nStore } from '@i18nlite/core'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { makeI18n } from './hook.js'
import { beforeEach, describe, expect, test } from 'vitest'

const _store = new I18nStore(['pt-br', 'en-us'], 'pt-br')

const { useLanguage, useTranslate } = makeI18n(_store)

describe('makeI18n maker', () => {
  beforeEach(() => _store.changeLanguage('pt-br', false))

  describe('created useLanguage hooks', () => {
    function Component() {
      const [lang, changeLanguage] = useLanguage()

      return (
        <>
          <button
            onClick={() => changeLanguage(lang === 'pt-br' ? 'en-us' : 'pt-br')}
          >
            Switch language
          </button>
          <div>{lang}</div>
        </>
      )
    }

    function setup() {
      render(<Component />)
    }

    test('should provide the current language as default language', () => {
      setup()
      expect(screen.getByText('pt-br')).toBeInTheDocument()
    })

    test('after changing language should provide the current language as chosen language', () => {
      setup()

      fireEvent.click(screen.getByText('Switch language'))

      expect(screen.getByText('en-us')).toBeInTheDocument()
    })
  })

  describe('created useTranslate hooks', () => {
    const literals = {
      'pt-br': {
        text: 'Texto {0} {0} {1}',
      },
      'en-us': {
        text: 'Text {0} {0} {1}',
      },
    }

    function Component() {
      const t = useTranslate(literals)

      return <div>{t('text', 'a', 'b')}</div>
    }

    function setup() {
      render(<Component />)
    }

    test('without changing language should display the formatted text in default language', () => {
      setup()

      expect(
        screen.getByText(
          literals['pt-br'].text.replace(/\{0\}/g, 'a').replace(/\{1\}/g, 'b'),
        ),
      ).toBeInTheDocument()
    })

    test('after changing language should display the formatted text in chosen language', () => {
      setup()

      act(() => _store.changeLanguage('en-us'))

      expect(
        screen.getByText(
          literals['en-us'].text.replace(/\{0\}/g, 'a').replace(/\{1\}/g, 'b'),
        ),
      ).toBeInTheDocument()
    })
  })
})
