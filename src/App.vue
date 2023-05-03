<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>

<template>
  <app-header/>
  <RouterView />
  <app-footer/>
</template>

<style scoped>


</style>
