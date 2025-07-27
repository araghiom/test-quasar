import { createApp } from 'vue'
import { Quasar } from 'quasar'
import router from './router'
import App from './App.vue'

// Import Quasar css
import 'quasar/src/css/index.sass'
import './css/quasar.variables.scss'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'

const app = createApp(App)

app.use(Quasar, {
  config: {
    brand: {
      primary: '#0E3863',
      secondary: '#031835',
      accent: '#f5f5f5',
      dark: '#031933',
      positive: '#4caf50',
      negative: '#f44336',
      info: '#2196f3',
      warning: '#ff9800'
    }
  },
  plugins: {} // import Quasar plugins if needed
})

app.use(router)

app.mount('#app') 