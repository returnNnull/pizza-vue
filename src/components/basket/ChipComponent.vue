<template>
  <div v-if="state" id="chip-content" class="p-05-1">
    <p id="chip-text">
      <slot></slot>
    </p>
<!--   <img id="chip-delete-btn" src="@/assets/img/ic/x-lg.svg" @click = "_delete">-->
  </div>
</template>

<script setup>

import {ref} from "vue";

const state = ref(true)
</script>

<style scoped>

#chip-content{
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 2em;
  margin: 0.5em;
  background: var(--grey);
}

#chip-text{
  font-style: italic;
  color:var(--text-dark);
  font-size: 0.6em;
}

#chip-delete-btn{
  width: 0.7em;
  height: 0.7em;
  margin-left: 1em;
  cursor: pointer;
}


</style>