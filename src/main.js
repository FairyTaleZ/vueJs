import { createApp } from 'vue'
import './style.css'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/HelloWorld.vue';
import Code from './views/code.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/code', name: 'Code', component: Code }
  ]
})

createApp(App)
  .use(router)
  .mount('#app')
