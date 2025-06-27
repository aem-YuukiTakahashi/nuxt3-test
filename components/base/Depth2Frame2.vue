<template>
  <div
    class="depth2-frame2"
    data-name="Depth 2, Frame 2"
    id="node-1_10"
  >
    <div class="depth2-frame2__inner">
      <div class="depth2-frame2__content">
        <div
          class="depth3-frame0"
          data-name="Depth 3, Frame 0"
          id="node-1_11"
        >
          <div class="depth3-frame0__row">
            <div
              class="depth4-frame0"
              data-name="Depth 4, Frame 0"
              id="node-1_12"
            >
              <div class="depth4-frame0__content">
                <div
                  class="depth5-frame0"
                  data-name="Depth 5, Frame 0"
                  id="node-1_13"
                >
                  <div class="depth5-frame0__inner">
                    <div
                      class="date-text"
                      id="node-1_14"
                    >
                      <p class="date-text__p">2024.01.20</p>
                    </div>
                  </div>
                </div>
                <div
                  class="depth5-frame1"
                  data-name="Depth 5, Frame 1"
                  id="node-1_15"
                >
                  <div class="depth5-frame1__inner">
                    <div
                      class="title-text"
                      id="node-1_16"
                    >
                      <p class="title-text__p">
                        New Single Release
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="depth5-frame2"
                  data-name="Depth 5, Frame 2"
                  id="node-1_17"
                >
                  <div class="depth5-frame2__inner">
                    <div
                      class="desc-text"
                      id="node-1_18"
                    >
                      <p class="desc-text__p">The artist's latest single, 'Midnight Serenade,' is now available on all major streaming platforms. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="depth4-frame1"
              data-name="Depth 4, Frame 1"
              id="node-1_19"
              :style="{ backgroundImage: `url('${imgDepth4Frame1}')` }"
            >
              <div class="depth4-frame1__img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const imgDepth4Frame1 = "https://placehold.jp/300x200.png";
</script>

<style scoped>
.depth2-frame2 {
  position: relative;
  width: 100%;
  height: 100%;
  background: black;
}
.depth2-frame2__inner {
  position: relative;
  width: 100%;
  height: 100%;
}
.depth2-frame2__content {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 16px;
  position: relative;
  width: 100%;
  height: 100%;
}
.depth3-frame0 {
  position: relative;
  border-radius: 12px;
  flex-shrink: 0;
  width: 100%;
}
.depth3-frame0__row {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0;
  position: relative;
  width: 100%;
  border: 0 solid transparent;
}
.depth4-frame0 {
  position: relative;
  flex-shrink: 0;
  width: 228px;
}
.depth4-frame0__content {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0;
  position: relative;
  width: 228px;
  border: 0 solid transparent;
}
.depth5-frame0 {
  position: relative;
  flex-shrink: 0;
  width: 100%;
}
.depth5-frame0__inner {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0;
  position: relative;
  width: 100%;
  border: 0 solid transparent;
}
.date-text {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 400;
  color: #9cabba;
  font-size: 14px;
  text-align: left;
  width: 100%;
  line-height: 21px;
}
.date-text__p {
  margin: 0;
  line-height: 21px;
}
.depth5-frame1 {
  height: 20px;
  position: relative;
  flex-shrink: 0;
  width: 100%;
}
.depth5-frame1__inner {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 20px;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0;
  position: relative;
  width: 100%;
  border: 0 solid transparent;
}
.title-text {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  color: #ffffff;
  font-size: 16px;
  text-align: left;
  width: 100%;
  line-height: 20px;
}
.title-text__p {
  margin: 0;
  line-height: 20px;
}
.depth5-frame2 {
  position: relative;
  flex-shrink: 0;
  width: 100%;
}
.depth5-frame2__inner {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0;
  position: relative;
  width: 100%;
  border: 0 solid transparent;
}
.desc-text {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 400;
  color: #9cabba;
  font-size: 14px;
  text-align: left;
  width: 100%;
  line-height: 21px;
}
.desc-text__p {
  margin: 0;
  line-height: 21px;
}
.depth4-frame1 {
  flex-basis: 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  flex-grow: 1;
  height: 133px;
  min-width: 1px;
  min-height: 1px;
  position: relative;
  border-radius: 12px;
  flex-shrink: 0;
}
.depth4-frame1__img {
  box-sizing: border-box;
  border: 0 solid transparent;
  height: 133px;
  width: 100%;
}
</style>
