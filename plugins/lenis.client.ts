import Lenis from 'lenis';

export default defineNuxtPlugin((nuxtApp) => {
    const lenis = new Lenis({});

    function raf(time: DOMHighResTimeStamp) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    // Lenisを初期化
    requestAnimationFrame(raf)

    // Lenisをprovide
    // これでコンポーネントで$lenisを利用できるようになる
    nuxtApp.provide('lenis', lenis)

    // ページ遷移時にスクロール位置をリセット
    nuxtApp.hook('page:finish', () => {
        lenis.scrollTo(0, { immediate: true });
    })
});
