<template>
  <div>
    <header class="header">共通ヘッダー</header>
    <main>
      <NuxtPage />
    </main>
    <footer class="footer">共通フッター</footer>
  </div>
</template>

<style scoped lang="scss">
.header {
  background: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
  font-size: 1.5rem;
}
.footer {
  background: #eee;
  color: #333;
  padding: 1rem;
  text-align: center;
  font-size: 1rem;
  margin-top: 2rem;
}
main {
  min-height: 60vh;
  padding: 2rem 0;
}
</style>
