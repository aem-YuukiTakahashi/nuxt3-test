<template>
  <div class="container">
    <div class="max-width">
      <div class="inner">
        <article>
          <h2>{{ heading }}</h2>

          <div class="article-body">

            <div class="coming-soon">
              <h3>Coming Soon</h3>
            </div>


            <div class="coming-soon coming-soon--image">
              <h3>Coming Soon</h3>
            </div>

          </div>
        </article>


      </div>
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
    min-height: 100vh;
    overflow: hidden;
  }

  .max-width {
    max-width: 1200px;
    margin: 0 auto;
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

  .coming-soon--image {
    margin-top: 80px;

    &::before {
      background-image: url('https://fastly.picsum.photos/id/884/1300/500.jpg?hmac=Rp7U5V8XbisdNjgvJi7OoD_-EpF-hqOlkxKHbZspVE4');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
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
