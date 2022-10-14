<template>
  <div class="tabletContainer">
    <p>입장하실 카페를 선택해주세요!</p>
    <div class="cafeList">
      <!-- v-for 로 카페 수만큼 버튼에 뿌려주기 -->
      <button></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
.tabletContainer {
  height: 100vh;
  width: 100vw;
  /*background-color: black;*/
  display: grid;
  grid-template-rows: 50% 50%;
}
</style>
