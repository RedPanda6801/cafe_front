<template>
  <div class="tabletContainer">
    <div class="cafeContainer">
      <!-- 여기는 카페 정보부분 -->
      <div class="cafeName">
        <!-- 카페이름 -->
        <h1>감자다방</h1>
      </div>
      <div class="cafeBanner">
        <h1>여기에 카페 배너가 들어갈거야</h1>
      </div>
    </div>
    <div class="inputContainer">
      <div class="inputPrint">
        <div class="inputMessage">
          <p>휴대폰번호 입력하셈~</p>
        </div>
        <!-- 입력창과 휴대폰번호 입력 안내 -->
        <div class="inputPrinter">
          <!-- 입력창 -->
          <h1>여긴 고객이 입력한 휴대폰번호</h1>
        </div>
      </div>
      <div class="keypad">
        <!-- 번호 패드부분 -->
        <h1>번호 키패드</h1>
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
  background-color: black;
  padding: 0px;
  display: grid;
  grid-template-columns: 50% 50%;
}
.cafeContainer {
  background-color: yellow;
  display: grid;
  grid-template-rows: 25% 75%;
  margin: 5px;
}
.cafeName {
  background-color: lightgreen;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
}
.cafeBanner {
  background-color: pink;
  margin: 5px;
  justify-content: center;
  align-items: center;
}
.inputContainer {
  background-color: green;
  display: grid;
  grid-template-rows: 20% 80%;
  margin: 5px;
}
.inputPrint {
  background-color: orange;
  display: grid;
  grid-template-rows: 20% 80%;
  margin: 5px;
}
.inputMessage {
  background-color: rgb(244, 169, 244);
  margin: 5px;
}
.inputPrinter {
  background-color: red;
  margin: 5px;
}
.keypad {
  background-color: blue;
  margin: 5px;
}
</style>
