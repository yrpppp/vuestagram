import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt' //import 하는데 ./로 시작하지 않는 것은 라이브러리 임폴트 하는 문법.
let emitter = mitt();
let app = createApp(App)
app.config.globalProperties.emitter = emitter;

import store from './store.js'

app.use(store).mount('#app')
