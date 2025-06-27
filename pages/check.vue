<template>
  <div>
    <h2>{{ heading }}</h2>

    <form @submit.prevent="submit">
      年：<input type="text" name="year" v-model="form.year" :class="{ 'error': error }" />
      月：<input type="text" name="month" v-model="form.month" :class="{ 'error': error }" />
      日：<input type="text" name="day" v-model="form.day" :class="{ 'error': error }" />
      <button type="submit">送信</button>
    </form>

    <p v-if="result">{{ result }}</p>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({ layout: 'default' })
  const heading = ref('日付チェック');
  const result = ref('');
  const error = ref(false);
  const form = ref({
    year: '',
    month: '',
    day: '',
  });

  const submit = () => {
    const year = form.value.year;
    const month = form.value.month;
    const day = form.value.day;

    // 年月日が全て数字かどうかをチェック
    if (!/^\d+$/.test(year) || !/^\d+$/.test(month) || !/^\d+$/.test(day)) {
      result.value = '年月日は全て数字で入力してください';
      error.value = true;
      return;
    }

    // 月が1~12の間かどうかをチェック
    if (Number(month) < 1 || Number(month) > 12) {
      result.value = '月は1~12の間で入力してください';
      error.value = true;
      return;
    }

    // 入力された年と月から日数を取得
    const days = new Date(Number(year), Number(month), 0).getDate();

    // 日が1~日数の間かどうかをチェック
    if (Number(day) < 1 || Number(day) > days) {
      result.value = `日は1~${days}の間で入力してください`;
      error.value = true;
      return;
    }

    // 入力された生年月日と現在日から20歳以上かどうかをチェック
    const now = new Date();
    const birthDate = new Date(Number(year), Number(month) - 1, Number(day));
    let age = now.getFullYear() - birthDate.getFullYear();
    const m = now.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < birthDate.getDate())) {
      age--;
    }
    if (age < 20) {
      result.value = '20歳以上ではありません';
      error.value = true;
      return;
    }

    result.value = `現在の年齢は${age}歳です`;
    error.value = false;

  };
</script>

<style scoped lang="scss">
  div {
    padding: 2rem;
    background: #f5f5f5;
    border-radius: 8px;
  }

  input.error {
    border: 1px solid red;
  }
</style>
