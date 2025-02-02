import { createApp } from 'vue';
import App from './App.vue';
import router from './route';

import '@/assets/cust-elementplus.scss';
import '@/assets/base.scss';
import '@/assets/icon/iconfont.css';

import ElementPlus from 'element-plus';

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount('#app').$nextTick(() => {
  // Use contextBridge
  window.ipcRenderer.on('main-process-message', (_event, message) => {
    console.log(message)
  });
})
