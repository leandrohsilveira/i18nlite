import React from 'react'
import { render, screen } from '@testing-library/react'
import { ChangeLanguage } from './index'
import i18n from './i18n.json'
import { setLanguage } from '../config/testing'

describe('ChangeLanguage component', () => {
  function setup() {
    setLanguage('en-us')
    render(<ChangeLanguage />)
  }

  test('should render the select input with the default language selected', () => {
    setup()

    expect(screen.getByText(i18n['en-us']['en-us'])).toBeInTheDocument()
  })
})
