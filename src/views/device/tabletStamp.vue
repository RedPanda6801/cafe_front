<template>
  <div class="tabletContainer">
    <div class="stampContainer">
      <h1>여기에 도장 현황 보여줄거야</h1>
      <div class="stampHeader"><p>내 쿠폰</p></div>
      <div></div>
    </div>
    <div class="greetingContainer">
      <h1>ㅇㅇ고객님 ~번째 방문 감사감사</h1>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.tabletContainer {
  height: 100vh;
  width: 100vw;
  /*background-color: black;*/
  padding: 0px;
  display: grid;
  grid-template-columns: 50% 50%;
}
.stampContainer {
  background-color: yellow;
  display: grid;
  grid-template-rows: 25% 75%;
  margin: 5px;
}
.greetingContainer {
  background-color: green;
  display: grid;
  grid-template-rows: 20% 80%;
  margin: 5px;
}
</style>
