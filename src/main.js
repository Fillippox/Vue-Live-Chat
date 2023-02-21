import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import '../src/assets/main.css'
import {projectAuth} from '../src/firebase/config.js'

import 'vue-emoji-picker/dist/vue-emoji-picker.css'
import VueEmojiPicker from 'vue-emoji-picker'

let app

projectAuth.onAuthStateChanged(() => {
    if(!app){
        app = createApp(App)
        .use(router)
        .mount('#app')}
    }
)
