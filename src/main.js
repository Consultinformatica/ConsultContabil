import { createApp } from 'vue'
import App from './App.vue'
import * as LucideIcons from 'lucide-vue-next';

import './assets/main.css'

const app = createApp(App);
Object.keys(LucideIcons).forEach(key => {
  app.component(key, LucideIcons[key]);
});
app.mount('#app')
