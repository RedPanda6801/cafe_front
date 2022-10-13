<template>
  <div class="tabletContainer">
    <div class="greetingContainer">
      <div class="userPhone">
        <p>010-0000-0000님</p>
      </div>
      <div class="userGreeting">
        <p>N 번째 방문해 주셔서 감사합니다!</p>
      </div>
    </div>
    <div class="stampContainer">
      <!-- <h1>여기에 도장 현황 보여줄거야</h1> -->
      <div class="stampHeader">
        <p>현재 사용 가능한 쿠폰 갯수 : 10000개</p>
      </div>
      <div class="stampBody">
        <h4>My Stamp</h4>
        <h5>여기에 쿠폰 현황 프린트</h5>
      </div>
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
  grid-template-rows: 30% 70%;
}
.stampContainer {
  /* background-color: yellow; */
  display: grid;
  grid-template-rows: 15% 85%;
  margin: 5px;
}
.stampHeader {
  align-items: center;
  /* background-color: orange; */
  display: flex;
  font-size: 30px;
  justify-content: center;
}
.stampBody {
  /* background-color: red; */
  margin: 10px;
  border: 1px;
  border-color: greenyellow;
  border-style: solid;
  border-radius: 10px;
}
.greetingContainer {
  /* background-color: green; */
  display: grid;
  grid-template-rows: 60% 40%;
  margin: 5px;
}
.userPhone {
  align-items: center;
  /* background-color: lightgreen; */
  display: flex;
  justify-content: center;
  font-size: 65px;
}
.userGreeting {
  /* background-color: lightseagreen; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
}
</style>
