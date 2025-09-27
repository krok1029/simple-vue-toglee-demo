
<template>
  <div class="navbar">
    <slot />
    <LangSelector />
  </div>
</template>

<script setup>
import LangSelector from './LangSelector.vue';
</script>
