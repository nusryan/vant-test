import { createApp } from 'vue'
import { Cell, IndexAnchor, IndexBar } from 'vant'
import 'vant/lib/index.css';
import './style.css'
import App from './App.vue'


const app = createApp(App)
app.use(IndexBar)
app.use(IndexAnchor)
app.use(Cell)

app.mount('#app')
