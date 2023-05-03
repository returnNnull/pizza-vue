<template>
  <header>
    <div class="header-logo">
      <h2>PIZZA</h2>
    </div>
    <nav>
      <ul>
        <li><a href="#pizza-section">Пицца</a></li>
        <li><a href="#snacks-section">Закуски</a></li>
        <li><a href="#sugar-section">Десерты</a></li>
        <li><a href="#drink-section">Напитки</a></li>
        <li><a href="#">Контакты</a></li>
        <li><a href="#">О нас</a></li>
      </ul>
    </nav>

    <div class="header-action">
<!--      <div class="btn secondary small header-action-item">Войти</div>-->
      <div class="header-action-item">
        <img src="@/assets/img/ic/basket3-fill.svg" alt="" @click = "_changeModalState">
        <p v-if="v_basket.size > 0" class="counter">{{v_basket.size}}</p>
      </div>
    </div>

    <modal v-if="modalState" @close-click = "_changeModalState">
      <basket-view @cleared = "_changeModalState"></basket-view>
    </modal>
  </header>
</template>



<script setup>

import Modal from "@/components/Modal.vue";
import {basket} from "@/stores/counter";
import BasketView from "@/views/BasketView.vue";
import {ref} from "vue";

const v_basket = basket()
const modalState = ref(false)
function _changeModalState(){
  modalState.value = !modalState.value
}
</script>

<style scoped>

.counter{
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  width: 1em;
  height: 1em;
  font-size: 0.6em;
  background: red;
  border-radius: 1em;
  right: 0;
  bottom: 0;
}

header {
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: var(--header-heigth);
  background: var(--black);
  z-index: 999;
}

header ul {
  display: flex;
}

.header-action{
  display: flex;
  justify-content: space-evenly;
}

.header-action-item{
  position: relative;
  cursor: pointer;
  margin: 0 1em;
}

.header-action img{
  width: 2em;
  height: 2em;
}
</style>