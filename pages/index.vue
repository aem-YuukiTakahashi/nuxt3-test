<template>
  <div>
    <h1>Welcome to Nuxt3!</h1>
    <NuxtLink to="/about" class="link">Aboutページへ</NuxtLink>
    <NuxtLink to="/toDoList" class="link">ToDoリストへ</NuxtLink>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({ layout: 'default' })
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  font-size: 4rem;
  color: red;
}

.link {
  display: block;
  text-align: center;
  font-size: 2rem;
  color: blue;
  margin-top: 2rem;
}
</style>
