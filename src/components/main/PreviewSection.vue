<template>
  <section class="preview-section">
    <p class="main-text ex-b-text">Как не крути, пицца - лучшая</p>
    <div class="actions">
      <a class="btn big primary mr-1" href="#pizza-section">Сделать заказ</a>
      <a class="btn big secondary" href="#reviews">Отзывы</a>
    </div>
    <div class="popular">
      <h1>Часто заказывают</h1>
      <div class="popular-category-container">
        <div class="popular-pizza-card" >
          <img src="@/assets/img/category/pizza/margarita-big.png">
          <h4 class="popular-pizza-card__text">Пицца Маргарита</h4>
        </div>
        <div class="popular-pizza-card" >
          <img src="@/assets/img/category/drinks/cola.png">
          <h4 class="popular-pizza-card__text">Кола классическая</h4>
        </div>
        <div class="popular-pizza-card" >
          <img src= "@/assets/img/category/pizza/p2.png">
          <h4 class="popular-pizza-card__text">Пицца Нью Йорк</h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>


</script>

<style scoped>
.preview-section {
  width: 100%;
  min-height: 100vh;
  background: url("@/assets/img/body-bacground.png") no-repeat center right var(--black);
  background-size: cover;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  padding-top: var(--header-heigth);
}

.preview-section .main-text{
  max-width: 70%;
}

.preview-section .actions{
  display: flex;

}

.preview-section .popular{
  display: flex;
  flex-direction: column;
}

.popular-category-container{
  display: flex;
  justify-content: left;
  flex-wrap: wrap;

}

.popular-pizza-card{
  display: flex;
  align-items: center;
  background: var(--white);
  border-radius: var(--radius-standart);
  padding: var(--padding-standart);
  margin: var(--margin-standart) var(--margin-standart) 0 0
}

.popular-pizza-card__text{
  color: var(--black);
}

.popular-pizza-card img{
  max-width: 100px;
  max-height: 100px;
}
</style>