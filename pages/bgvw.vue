<template>
  <div class="container">
    <div class="inner">
      <article>
        <h2>{{ heading }}</h2>

        <div class="article-body">

          <div class="coming-soon">
            <h3>Coming Soon</h3>
          </div>

        </div>
      </article>


    </div>



    <NuxtLink to="/" class="link">Home</NuxtLink>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({ layout: 'default' })
  const heading = ref('TEST');
</script>

<style scoped lang="scss">
  .container {
    max-width: 1200px;
    margin: 0 auto;
    min-height: 100vh;
  }

  .inner {
    padding: 0 80px;
  }

  article {
    h2 {
      padding: 40px 0;
      border-top: 1px solid #000;
      border-bottom: 1px solid #000;
    }
  }

  .coming-soon {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: 0.05em;
    color: #fff;
    padding: 40px;
    text-align: center;

    position: relative;

    &::before {
      content: '';
      width: 100vw;
      height: 100%;
      position: absolute;
      top: 0;
      left: 50%;
      background: #000;
      z-index: -1;
      transform: translateX(-50%);
    }
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
