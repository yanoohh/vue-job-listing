<script setup>
import Navbar from './components/Navbar.vue'
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="p-2 border">
    <Navbar />
    <RouterView />
  </div>
  
</template>
