import { createApp } from 'vue'
// 说明 ：本地测试时，避免eslint对tg-z-ui检测，在tg-z-ui/tg-z-ui.esm.js 文件头部添加 /* eslint-disable */
import tgZUI from 'tg-z-ui'
import 'tg-z-ui/dist/bundle.css'
import App from './App.vue'

const app = createApp(App);
app.use(tgZUI)
app.mount('#app')
