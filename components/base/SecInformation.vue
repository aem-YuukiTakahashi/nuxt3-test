<template>
  <div class="sec-information">
    <div class="sec-information__container">
      <div class="sec-information__vector sec-information__vector--top">
        <img :src="imgVector1" alt="" />
      </div>
      <div class="sec-information__inner">
        <div class="sec-information__content">
          <div class="sec-information__heading">
            <span>INFORMATION</span>
          </div>
          <div class="sec-information__text">
            <p>イベント開催に先駆けて、関連商品の事前予約販売を</p>
            <p>当サイトで受付中</p>
          </div>
          <div class="sec-information__period">
            <p>【第○弾 予約期間】</p>
            <p>20XX年XX月XX日 〜20XX年XX月XX日</p>
          </div>
          <div class="sec-information__note">
            <p>この機会をお見逃しなく！</p>
          </div>
        </div>
      </div>
      <div class="sec-information__vector sec-information__vector--bottom">
        <img :src="imgVector23" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const imgVector1 = "http://localhost:3845/assets/455e3feddb721dde57f4f185b79ce54967ac38f8.svg";
const imgVector23 = "http://localhost:3845/assets/ce726adddf287bd875bef1d6e371f33e60000934.svg";
</script>

<style scoped>
.sec-information {
  width: 100%;
  min-width: 1440px;
  background: #fff;
  box-shadow: 0 -8px 0 0 #1e88e5, 0 8px 0 0 #64b5f6;
}
.sec-information__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
}
.sec-information__vector {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sec-information__vector--top img {
  transform: rotate(-90deg) scaleY(-1);
  width: 100%;
  aspect-ratio: 25/396;
}
.sec-information__vector--bottom img {
  transform: rotate(90deg);
  width: 100%;
  aspect-ratio: 25/396;
}
.sec-information__inner {
  background: #fff;
  width: 1440px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.sec-information__content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 220px;
}
.sec-information__heading {
  width: 398px;
  border-top: 1px dashed #1e88e5;
  border-bottom: 1px dashed #1e88e5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 48px;
  text-align: center;
}
.sec-information__text {
  width: 484px;
  color: #212121;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 8px;
}
.sec-information__period {
  width: 484px;
  color: #212121;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 8px;
}
.sec-information__note {
  color: #212121;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 0.8px;
}
</style>
