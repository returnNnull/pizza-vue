<template>
  <div id = "product-setting-content">
    <div class="cln-1 p-1 flex v-c ">
      <img class="adaptive-img" :src="product.img">
    </div>
    <div class="cln-1 p-1">
      <div class="pizza-info" :id="product.id">
        <h1>{{ product.title }}</h1>
        <div class="h-splitter-1"></div>
        <p>{{product.about}}</p>
        <div class="h-splitter-1"></div>
<!--        <div style="width: 100%; display: flex; justify-content: space-between" v-if="withAdditives">-->
<!--          <input type="radio" id="contactChoice1" name="contact" value="small" v-model="pizzaSize" checked @change = '_changeSum'/>-->
<!--          <label for="contactChoice1">Маленькая</label>-->

<!--          <input type="radio" id="contactChoice2" name="contact" value="medium" v-model="pizzaSize" @change = '_changeSum'/>-->
<!--          <label for="contactChoice2">Средняя</label>-->

<!--          <input type="radio" id="contactChoice3" name="contact" value="big" v-model="pizzaSize" @change = '_changeSum'/>-->
<!--          <label for="contactChoice3">Большая</label>-->
<!--        </div>-->
        <div class="h-splitter-1"></div>
        <div class="flex wrap">
          <div class="card small box-shadow ta-c" v-if="withAdditives" v-for="i in getListByGroup(4)" @click = '_additive(i)' :id="i.id">
            <img class="adaptive-img" :src="i.img">
            <h6>{{i.title}}</h6>
            <p class="m-1">{{i.price}}р</p>
          </div>

        </div>

      </div>
      <div class="h-splitter-1"></div>
      <button class="btn primary big m-1" @click = "_addToBasket">Добавить в корзину за {{ pizzaSum }}р</button>
    </div>
  </div>
</template>

<script setup>

import {basket} from "@/stores/counter";
import {ref} from "vue";
import {getListByGroup} from "@/stores/cloud";

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
})


const emits = defineEmits([
  'closeClick'
])

const pizzaSum = ref(props.product.price)
const additivesSum  = ref(0)

const pizzaSize = ref("small")

const additives = new Set()


function _close(){
  additives.clear()
  emits('closeClick')

}

function _additive(item){
  const element = document.getElementById(item.id);
  if (additives.has(item)){
    additives.delete(item)
    pizzaSum.value -= item.price
    additivesSum.value -= item.price
    element.style.borderColor = "#FFFFFF"
  }
  else {
    additives.add(item)
    pizzaSum.value += item.price
    additivesSum.value += item.price
    element.style.borderColor = "#000000"
  }
}

function _addToBasket(){
  const p = props.product
  basket().addItem(p, Array.from(additives))
  _close()
}


function _changeSum(){
  if (pizzaSize.value === "small"){
    pizzaSum.value = props.product.price + additivesSum.value
  }
  if(pizzaSize.value === "medium"){
    pizzaSum.value = props.product.price + 100  + additivesSum.value
  }

  if(pizzaSize.value === "big"){
    pizzaSum.value = props.product.price + 200  + additivesSum.value
  }
}

</script>

<style scoped>
* {
  color: var(--text-dark);
}

#product-setting-content{
  max-width: 800px;
  display: flex;
  overflow-y: auto;
}
</style>