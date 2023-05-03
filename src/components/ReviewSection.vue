<template>
  <div class="review-container">
    <section id="reviews">
      <div id = "review-mark-container">
        <h2>Средняя оценка: </h2>
        <p id = "middle-mark-container">{{middleMark}}</p>
      </div>
      <h2>Отзывы посетителей</h2>
      <ul>
        <li v-for="i in reviews">
          <h3>{{i.name}}</h3>
          <p>{{i.text}}</p>
        </li>
      </ul>
    </section>
    <section id="add-review">
      <h2>Оставить отзыв</h2>
      <form action="#" method="post">
        <label for="name">Имя:</label>
        <input type="text" id="name" name="name" required v-model="comment.name">
        <label for="email">Адрес электронной почты:</label>
        <input type="email" id="email" name="email" required v-model="comment.email">
        <label for="rating">Оценка:</label>
        <select id="rating" name="rating" required v-model="comment.mark">
          <option value="5">5 звезд</option>
          <option value="4">4 звезды</option>
          <option value="3">3 звезды</option>
          <option value="2">2 звезды</option>
          <option value="1">1 звезда</option>
        </select>
        <label for="review">Отзыв:</label>
        <textarea id="review" name="review" required v-model="comment.text"></textarea>
        <button type="button" @click = "_add">Отправить</button>
      </form>
    </section>
  </div>

</template>

<script setup>

import {reactive, ref} from "vue";

const comment = reactive({
  name: "",
  text: "",
  email: "",
  mark: 0,
})

const middleMark = ref(4.8)

const reviews = reactive([
  {
    name: "Иван Иванов",
    text: "Отличная пицца и быстрая доставка! Всем рекомендую.",
    email: "email@email.ru",
    mark: 5,
  },
  {
    name: "Анна Петрова",
    text: "Очень понравилась пицца с грибами и оливками. Доставили быстро и горячей.  ",
    email: "email@email.ru",
    mark: 4,
  },
  {
    name: "Петр Сидоров",
    text: "Не смог найти подходящую пиццу в меню. Жалко, что нет возможности сделать свой заказ.",
    email: "email@email.ru",
    mark: 4,
  }
])


function _calculateMark() {
  let result = 0.0;
  let count = 0
  for (let i = 0; i < reviews.length; i++) {
    result += parseFloat(reviews[i].mark)
    count++;
  }

  middleMark.value = result / count
}

function _add(){
  reviews.push(comment)
  _calculateMark()
}
</script>

<style scoped>

#review-mark-container{
  display: flex;
}

.review-container {
  display: flex;
  justify-content: center;
  padding: 1em;
}

#middle-mark-container{
  width: 100px;
  height: 100px;
  border: 1px solid var(--primary-color-ligth);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  margin-left: 1em;
}

#add-review{
  width: 100%;
  max-width: 700px;
}

#reviews {
  width: 100%;
  max-height: 500px;
  overflow-y: auto;
}
* {
  box-sizing: border-box;
  color: var(--text-dark);
}

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

header {
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

nav ul li {
  margin-left: 1rem;
}

nav ul li:first-child {
  margin-left: 0;
}

nav ul li a {
  color: inherit;
  text-decoration: none;
}

h1 {
  margin: 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin-bottom: 1rem;
}

h2 {
  margin: 2rem 0 1rem;
}

form label,
form input,
form select,
form textarea,
form button {
  display: block;
  margin-bottom: 1rem;
  width: 100%;
}

form label {
  font-weight: bold;
}

form input,
form select,
form textarea {
  padding: 0.5rem;
  border: 1px solid #ccc;
}

form button {
  padding: 0.5rem;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
}

form button:hover {
  background-color: #666;
}
</style>