<template>
  <div>
    <h2>{{ heading }}</h2>
    <p>これはAboutページです。</p>

    <section>
      <h3>Section 1</h3>
      <p>これはSection 1です。</p>
    </section>

    <section>
      <h3>Section 2</h3>
      <p>これはSection 2です。</p>
    </section>

    <section>
      <h3>Section 3</h3>
      <p>これはSection 3です。</p>
    </section>

    <section>
      <h3>Section 4</h3>
      <p>これはSection 4です。</p>
    </section>

    <section>
      <h3>Section 5</h3>
      <p>これはSection 5です。</p>
    </section>

    <section>
      <h3>Section 6</h3>
      <p>これはSection 6です。</p>
    </section>

    <NuxtLink to="/" class="link">Home</NuxtLink>
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

  section {
    min-height: 100vh;
    padding: 2rem;
  }

  .link {
    display: inline-block;
    margin-top: 2rem;
    padding: 2rem;
    text-decoration: none;
    color: #000;
    font-size: 1.2rem;
  }
</style>
