<template>
  <div class="tabletContainer">
    <Sidemenu />
    <div class="tabletHeader">
      <p>입장하실 카페를 선택해주세요!</p>
    </div>
    <div>
      <!-- v-for 로 카페 수만큼 버튼에 뿌려주기 -->
      <button class="cafeBtn">감자다방</button>
    </div>
  </div>
</template>

<script>
import Sidemenu from '../main/Sidemenu.vue'
export default {
  components: {
    Sidemenu
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
.tabletContainer {
  height: 100%;
  width: 100%;
}
.tabletHeader {
  margin-top: 50px;
  display: grid;
  justify-content: center;
  font-size: 50px;
}
.cafeBtn {
  width: 90%;
  height: 100px;
  border-radius: 30px;
  margin-top: 20px;
}
</style>
