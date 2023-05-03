<template>
  <div id ="basket-content">
    <p v-if="basket_cloud.size === 0" id="basket-content-empty">Корзина пуста</p>
    <basket-item v-for="(item, index) in basket_cloud.list" :key = "item.id"
                 :product = 'item'
                 @additive-deleted = '(id) => _deleteAdditive(id, index)' />
    <div class="h-splitter-1"></div>
    <div v-if="basket_cloud.size > 0" style="display: flex; justify-content: center">
      <button class="btn secondary big m-1" @click = "_clearBasket"  style="color: var(--text-dark)">Очистить корзину {{ pizzaSum }}</button>
      <button class="btn primary big m-1">Оформить за {{ basket_cloud.summary }}р</button>
    </div>

  </div>

</template>

<script setup>



import {basket} from "@/stores/counter";
import BasketItem from "@/components/basket/BasketItem.vue";
import {ref} from "vue";

const basket_cloud = basket()


const emits = defineEmits([
    "cleared"
])

function _deleteAdditive(id, index){
  basket_cloud.deleteAdditive(id, index)
}

function _clearBasket(){
  basket_cloud.clear()
  emits('cleared')
}

function _chipDeleted(index, additive){
  basket_cloud.deleteChip(index, additive)
}

</script>

<style scoped>

#basket-content{
  display: flex;
  flex-direction: column;
  max-height: 80vh;
  overflow-y: auto;

}

#basket-content-empty{
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--text-dark);
  min-height: 200px;
}
</style>