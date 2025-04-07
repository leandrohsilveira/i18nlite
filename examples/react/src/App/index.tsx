import { ChangeLanguage } from '../ChangeLanguage/index.js'
import { useTranslate } from '../config/index.js'
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
