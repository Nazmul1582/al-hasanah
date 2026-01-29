import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { DefaultApolloClient } from '@vue/apollo-composable'
import apolloClient from './lib/apollo'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.provide(DefaultApolloClient, apolloClient)
app.mount('#app')
