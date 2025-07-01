<template>
  <div class="container">
    <h2>{{ heading }}</h2>
    <p>これはAboutページです。</p>

    <div class="image-list">
      <div v-for="image in imageList" :key="image.src" class="image-item" @click="openModal(image.src)">
        <img :src="image.src" :alt="image.alt" />
      </div>
    </div>

    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-content">
        <div class="modal-inner">
          <div class="modal-wrapper" data-lenis-prevent>
            <img :src="selectedImage" :alt="selectedImage" class="modal-image" />
            <div class="modal-close">
              <button @click="closeModal">閉じる</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <NuxtLink to="/" class="link">Home</NuxtLink>
  </div>
</template>

<script setup lang="ts">
  const $lenis: any = useNuxtApp().$lenis;

  definePageMeta({ layout: 'default' })
  const heading = ref('Aboutページ');

  // 適当な仮画像一覧の配列（サイズ等もバラバラにする）
  const imageList = ref([
    {
      src: 'https://picsum.photos/200/300',
      alt: 'Image 1'
    },
    {
      src: 'https://picsum.photos/300/300',
      alt: 'Image 2'
    },
    {
      src: 'https://picsum.photos/400/300',
      alt: 'Image 3'
    },
    {
      src: 'https://picsum.photos/400/400',
      alt: 'Image 4'
    },
    {
      src: 'https://picsum.photos/500/500',
      alt: 'Image 5'
    },
    {
      src: 'https://picsum.photos/600/600',
      alt: 'Image 6'
    },
    {
      src: 'https://picsum.photos/700/700',
      alt: 'Image 7'
    }
  ])

  const isModalOpen = ref(false);
  const selectedImage = ref('');

  const openModal = (src: string) => {
    selectedImage.value = src;
    isModalOpen.value = true;

    // オープン時にlenisを停止
    $lenis.stop();
  }

  const closeModal = () => {
    isModalOpen.value = false;

    // クローズ時にlenisを再開
    $lenis.start();
  }

</script>

<style scoped lang="scss">
  div {
  }

  .container {
    padding: 2rem;
    background: #f5f5f5;
    border-radius: 8px;
  }

  section {
    min-height: 100vh;
    padding: 2rem;
  }

  .image-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .image-item {
    width: 200px;
    height: 200px;
    cursor: pointer;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
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

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  .modal-content {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-inner {
    height: 80vh;
    overflow: hidden;
  }

  .modal-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: auto;
    position: relative;
  }

.modal-close button {
  display: inline-block;
  padding: 1rem 2rem;
  background: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 2rem;
}
</style>
