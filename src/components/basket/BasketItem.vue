<template>
  <div id = "basket-item-content">
    <div class="flex" style="align-items: center">
      <img id = "basket-product-img" class="adaptive-img" :src="product.item.img">
      <div class="chips-group-container">
        <chip-component v-for="i in product.additives" @chip-deleted = '_delete(i.id)' :key = "i.id">{{i.title}}</chip-component>
      </div>
    </div>
<div class="flex"  style="width: 100%; align-items: center; justify-content: space-evenly" >
  <p>{{product.item.title}}</p>
  <p id="basket-item-about">{{product.item.about}}</p>
</div>

  </div>
</template>

<script setup>

import ChipComponent from "@/components/basket/ChipComponent.vue";

defineProps({
  product: {
    type: Object,
    default: (() => {})
  }
});

const emits = defineEmits([
    "additiveDeleted",
])


function _delete(id){
  emits('additiveDeleted', id)
}

</script>

<style scoped>

#basket-item-about{
  max-width: 200px;
}

.chips-group-container{
  min-width: 200px;
}

#basket-item-content * {
  color: var(--text-dark);
}

.delete-icon{
  width: 1em;
  height: 1em;
  color: var(--black);
  font-size: 2em;
  cursor: pointer;
  margin: 1em;
}


#basket-item-content{
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 2em;
}

#basket-product-img{
  max-width: 100px;
}

img {

}
</style>