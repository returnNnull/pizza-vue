<template>
  <section class="price-list-section">
    <div class="container">
      <div id = 'pizza-section' class="price-list__category">
        <div class="h-splitter-1"></div>
        <h1 class="price-list__header">Пицца</h1>
        <div class="h-splitter-1"></div>
        <div class="price-list__container">
          <item-card :class="'big'" v-for="i in getListByGroup(0)" :key = "i.id"
                     :product = "i" :with-additives = "true"/>
        </div>
      </div>

      <div id = 'drink-section' class="price-list__category">
        <div class="h-splitter-1"></div>
        <h1 class="price-list__header">Напитки</h1>
        <div class="h-splitter-1"></div>
        <div class="price-list__container">
          <item-card :class="'big'" v-for="i in getListByGroup(1)" :key = "i.id"
                     :product = "i"/>
        </div>
      </div>

      <div id = 'snacks-section' class="price-list__category">
        <div class="h-splitter-1"></div>
        <h1 class="price-list__header">Закуски</h1>
        <div class="h-splitter-1"></div>
        <div class="price-list__container">
          <item-card :class="'big'" v-for="i in getListByGroup(2)" :key = "i.id"
                     :product = "i"/>
        </div>
      </div>


      <div id = 'sugar-section' class="price-list__category">
        <div class="h-splitter-1"></div>
        <h1 class="price-list__header">Диссерт</h1>
        <div class="h-splitter-1"></div>
        <div class="price-list__container">
          <item-card :class="'big'" v-for="i in getListByGroup(3)" :key = "i.id"
                     :product = "i"/>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>

import ItemCard from "@/components/ItemCard.vue";
import {getListByGroup} from "@/stores/cloud";


</script>

<style scoped>

.price-list-section {
  width: 100%;
  background: center var(--grey) no-repeat;
  background-size: cover;
  --price-list-text-color: var(--text-dark) !important;
}

.price-list-section * {
  color: var(--price-list-text-color);
}


.price-list__header {
  display: block;
  padding: var(--padding-standart);
}

.price-list__container {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
}


</style>