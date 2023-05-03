<template>
  <div class="card big" @click="_changeModalState">
    <img class="adaptive-img " :src="product.img">
    <div class="h-splitter-1"></div>
    <h3 class="pizza-card__header">{{ product.title }}</h3>
    <div class="h-splitter-1"></div>
    <p class="pizza-card__text">{{ product.about }}</p>
    <div class="h-splitter-1"></div>
    <h2 class="pizza-card__price">{{ product.price }}₽</h2>
    <div class="h-splitter-1"></div>
    <button class="btn primary small p-1">В корзину</button>
  </div>
  <modal v-if="modalState"  @close-click="_changeModalState" >
    <product-setting-content :product="props.product" :with-additives="withAdditives" @close-click = '_changeModalState' />
  </modal>
</template>

<script setup>

import { ref} from "vue";
import Modal from "@/components/Modal.vue";
import ProductSettingContent from "@/components/ProductSettingContent.vue";

const props = defineProps({
  product: {
    type: Object,
    default: (() => {
    })
  },
  withAdditives: {
    type: Boolean,
    default: false
  }
});

const modalState = ref(false)

function _changeModalState() {
  modalState.value = !modalState.value
}


</script>

<style scoped>
:root {
  --card-wigth: 350px;
  --small-card-wigth: 100px
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: var(--radius-standart);
  margin: var(--margin-standart);
  padding: var(--padding-standart);
  background: var(--white);
  cursor: pointer;
}

.card * {
  color: var(--text-dark);
}

.card.big {
  width: var(--card-wigth);
  padding: calc(var(--padding-standart) * 2);
}

.card.small {
  width: var(--small-card-wigth);
  border-radius: calc(var(--radius-standart) / 2);
  margin: calc(var(--margin-standart) / 2);
}


.pizza-card__header {
  min-height: 2em;
  font-weight: bold;
}

.pizza-card__text {
  max-height: 4em;
  overflow-y: hidden;
  line-height: 1.3em;
  height: calc(1.3em * 4);
  text-overflow: ellipsis
}

.card .adaptive-img {
  max-height: 250px;
}

.card .adaptive-img:hover {
  padding-top: 0.7em;
}

</style>