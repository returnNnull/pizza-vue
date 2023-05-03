<template>
  <div id="modal">
    <div class="modal__body">
      <img class="modal__close-btn" src="@/assets/img/ic/x-lg.svg" @click = "_close">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>

const emits = defineEmits([
    'closeClick'
])



function _close(){
  emits('closeClick')

}

</script>

<style scoped>


#modal{
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.9);
}

#modal *{
  color: var(--text-dark);
}

.modal__body{
  margin: 0 auto;
  min-width: 50%;
  max-width: 1200px;
  border-radius: var(--radius-standart);
  background: var(--white);
  padding: var(--padding-standart);
}

.modal__close-btn{
  position: absolute;
  right: 2em;
  top: 2em;
  z-index: 1000;
  cursor: pointer;
}


</style>