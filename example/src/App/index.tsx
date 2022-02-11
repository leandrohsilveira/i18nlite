import React from 'react'
import { ChangeLanguage } from '../ChangeLanguage'
import { useTranslate } from '../config/i18n'
import i18n from './i18n.json'

const App = () => {
  const t = useTranslate(i18n)
  return (
    <>
      <ChangeLanguage />
      <br />
      <br />
      <div>{t('hello', t('world'))}</div>
    </>
  )
}

export default App
