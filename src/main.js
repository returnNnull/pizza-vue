import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')



export function getListByGroup(value){
    switch (value){
        case 0:
            return pizza;
        case 1:
            return drinks;
        case 2:
            return snacks;
        case 3:
            return sugar;
        case 4:
            return additives
        default:
            return null;
    }
}

const pizza =[
    {
        id: 1000,
        title: "Маргарита",
        about: "Традиционная итальянская пицца, пожалуй, самая популярная в мире, даже меню любой пиццерии начинается, как правило, именно с неё. ",
        price: 350,
        group: 0,
        img: "./img/category/pizza/margarita-big.png"
    },
    {
        id: 1001,
        title: "Нью-йорк",
        about: "Пицца с томатами, пицца в нью-йоркском стиле",
        price: 450,
        group: 0,
        img: "./img/category/pizza/p2.png"
    },
    {
        id: 1002,
        title: "Пеперони",
        about: "Острая, с салями",
        price: 350,
        group: 0,
        img: "./img/category/pizza/peper.png"
    },
    {
        id: 1003,
        title: "C грибами",
        about: "Пицца с грибами, салями, томатами и белым соусом",
        price: 350,
        group: 0,
        img: "./img/category/pizza/p3.png"
    },
    {
        id: 1004,
        title: "Сицилийская пицца",
        about: "В отличие от многих других видов пиццы, сыр, нарезанный довольно крупными кусками (по классическому рецепту это итальянский сыр пекорино (например, тума) и солёная рыба (анчоусы или сардины) здесь помещаются под слоем обжаренного в оливковом масле лука",
        price: 350,
        group: 0,
        img: "./img/category/pizza/cicil.png"
    },

    {
        id: 1005,
        title: "Бургер пицца",
        about: "Ветчина, маринованные огурчики, томаты, красный лук, чеснок, соус бургер, моцарелла, фирменный томатный соус",
        price: 419,
        group: 0,
        img: "./img/category/pizza/burger.png"
    },
    {
        id: 1006,
        title: "Cырный цепленок",
        about: "Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, фирменный соус альфредо, чеснок",
        price: 469,
        group: 0,
        img: "./img/category/pizza/chiken.png"
    },




]

const drinks = [
    {
        id: 2000,
        title: "Добрый кола",
        about: "0,5",
        price: 109,
        group: 1,
        img: "./img/category/drinks/cola.png"
    },

    {
        id: 2001,
        title: "Добрый кола без сахара",
        about: "0,5",
        price: 109,
        group: 1,
        img: "./img/category/drinks/no_sugar.png"
    },
    {
        id: 2002,
        title: "Добрый Апельсин",
        about: "0,5",
        price: 109,
        group: 1,
        img: "./img/category/drinks/orange.png"
    },

]

const snacks = [
    {
        id: 3000,
        title: "Супермясной рулет",
        about: "Горячая закуска с цыпленком, моцареллой, митболами, острыми колбасками чоризо и соусом бургер в тонкой пшеничной лепешке",
        price: 209,
        group: 2,
        img: "./img/category/snacks/1.png"
    },
    {
        id: 3002,
        title: "Карри рулет",
        about: "Горячая закуска с цыпленком, ананасом, сладким перцем, моцареллой и пряным соусом карри в тонкой пшеничной лепешке",
        price: 189,
        group: 2,
        img: "./img/category/snacks/2.png"
    },
]

const sugar = [

    {
        id: 4000,
        title: "Чизкейк Нью-Йорк",
        about: "Мы перепробовали тысячу десертов и наконец нашли любимца гостей — нежнейший творожный чизкейк",
        price: 149,
        group: 3,
        img: "./img/category/sugar/img.png"
    },
    {
        id: 4001,
        title: "Маффин Соленая карамель",
        about: "Раз откусить — навсегда полюбить! Оцените яркое сочетание соленой карамели и арахиса",
        price: 99,
        group: 3,
        img: "./img/category/sugar/img_1.png"
    },
    {
        id: 4002,
        title: "Рулетики с корицей",
        about: "Десерт, одобренный нашими бабушками. Горячие сладкие рулетики с пряной корицей и сахаром",
        price: 205,
        group: 3,
        img: "./img/category/sugar/img_2.png"
    },
    {
        id: 4003,
        title: "Сырники с малиновым вареньем",
        about: "Любимый десерт многих наших гостей — румяные сырники из печи. Такие нежные, в меру сладкие и напоминающие детство",
        price: 295,
        group: 3,
        img: "./img/category/sugar/img_3.png"
    },
]

const additives =[
    {
        id: 5000,
        title: "Острый халапеньо",
        price: 59,
        img: "./img/category/additives/jalapeno.png"
    },
    {
        id: 5001,
        title: "Шампиньоны",
        price: 59,
        img: "./img/category/additives/img.png"
    },
    {
        id: 5002,
        title: "Маринованные огурчики",
        price: 59,
        img: "./img/category/additives/img_1.png"
    },
    {
        id: 5003,
        title: "Свежие томаты",
        price: 59,
        img: "./img/category/additives/img_3.png"
    },
    {
        id: 5004,
        title: "Пикантная пеперони",
        price: 59,
        img: "./img/category/additives/img_2.png"
    },
]