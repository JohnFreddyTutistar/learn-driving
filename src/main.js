import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueAxios from 'vue-axios'
import Axios from 'axios'
/*import VueGoogleMaps from '@fawmi/vue-google-maps'*/
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'

//Vue.config.productionTip = false
const app = createApp(App)
// Make BootstrapVue available throughout your project
//Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
//Vue.use(IconsPlugin);
app.use(VueAxios, Axios);


/*app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik',
    },
})*/

app.use(router)

app.mount('#app')
