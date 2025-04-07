import { render, screen } from '@testing-library/react'
import { ChangeLanguage } from './index.js'
import i18n from './i18n.json'
import { describe, expect, test } from 'vitest'
import { store } from '../config/index.js'

describe('ChangeLanguage component', () => {
  function setup() {
    store.changeLanguage('en-us', false)
    render(<ChangeLanguage />)
  }

  test('should render the select input with the default language selected', () => {
    setup()

    expect(screen.getByText(i18n['en-us']['en-us'])).toBeInTheDocument()
  })
})
