import App from './App.svelte'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

if (!/^localhost/.test(window.location.host) && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('serviceWorker.js')
}

const app = new App({
  target: document.body,
})

export default app
