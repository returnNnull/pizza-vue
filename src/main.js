import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')


export class Product {


    constructor(id, title, about, price, img) {
        this.id = id;
        this.title = title;
        this.about = about;
        this.price = price;
        this.img = img;
    }


    static empty(){
        return new Product(0, "", "", 100, "")
    }
}
