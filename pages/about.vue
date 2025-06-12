<template>
  <div>
    <h2>{{ heading }}</h2>
    <p>これはAboutページです。</p>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({ layout: 'default' })
  const heading = ref('Aboutページ');
</script>

<style scoped lang="scss">
  div {
    padding: 2rem;
    background: #f5f5f5;
    border-radius: 8px;
  }
</style>
