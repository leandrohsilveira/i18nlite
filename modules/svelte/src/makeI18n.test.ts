import { act, render, screen } from '@testing-library/svelte'
import userEvent from '@testing-library/user-event'
import literals from './Language.i18n.json'
import Language from './Language.svelte'
import { setLanguage, store } from './testing'

describe('makeI18n maker', () => {
  beforeEach(() => setLanguage('pt-br'))

  function setup() {
    render(Language)
  }

  test('without changing language should display the formatted text in default language', async () => {
    setup()

    expect(literals).toBeDefined()
    expect(literals['pt-br']).toBeDefined()

    expect(
      await screen.findByText(
        literals['pt-br'].hello.replace(/\{0\}/g, 'Test'),
      ),
    ).toBeInTheDocument()
  })

  test('after changing language in the store should display the formatted text in chosen language', async () => {
    setup()

    act(() => store.changeLanguage('en-us'))

    expect(
      await screen.findByText(
        literals['en-us'].hello.replace(/\{0\}/g, 'Test'),
      ),
    ).toBeInTheDocument()
  })

  test('after changing language in the select field should display the formatted text in chosen language', async () => {
    setup()

    userEvent.selectOptions(
      await screen.findByPlaceholderText(literals['pt-br'].language),
      await screen.findByText(literals['pt-br']['en-us']),
    )

    expect(
      await screen.findByText(
        literals['en-us'].hello.replace(/\{0\}/g, 'Test'),
      ),
    ).toBeInTheDocument()
  })
})
