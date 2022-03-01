import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import appCore from '@/mixins/coreMixin.js'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'



const app = createApp(App)

app.mixin(appCore)

app
.use(store)
.use(router)
.use(Quasar, quasarUserOptions)
.mount('#app')
