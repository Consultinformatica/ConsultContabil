import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/routers'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLocationDot, faPhone, faEnvelope, faBuilding, faChartPie, faCalendarWeek, faCalculator } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faLocationDot, faPhone, faEnvelope, faBuilding, faChartPie, faCalendarWeek, faCalculator )
library.add(faFacebook, faInstagram, faLinkedin)

const app = createApp(App)

app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')