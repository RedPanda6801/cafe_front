<template>
  <div class="tabletContainer">
    <div class="cafeContainer">
      <!-- 여기는 카페 정보부분 -->
      <div class="cafeName">
        <!-- 카페이름 -->
        <h1>감자다방</h1>
      </div>
      <div class="cafeBanner">
        <img src="../../../public/cafe-default.png" class="banner" />
      </div>
    </div>
    <div class="inputContainer">
      <div class="inputPrint">
        <div class="inputMessage">
          <h5>휴대폰 번호를 입력하세요</h5>
        </div>
        <!-- 입력창과 휴대폰번호 입력 안내 -->
        <div class="inputPrinter">
          <!-- 입력창 -->
          <h1>010-0000-0000</h1>
        </div>
      </div>
      <div class="keypad">
        <!-- 번호 패드부분 -->
        <table>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
          </tr>
          <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
          </tr>
          <tr>
            <td>삭제</td>
            <td>0</td>
            <td>확인</td>
          </tr>
        </table>
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
  grid-template-columns: 50% 50%;
}
.cafeContainer {
  /*background-color: yellow;*/
  display: grid;
  grid-template-rows: 25% 75%;
  margin: 5px;
}
.cafeName {
  /*background-color: lightgreen;*/
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
}
.cafeBanner {
  /*background-color: pink;*/
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.banner {
  width: 90%;
  height: 90%;
  justify-content: center;
  align-items: center;
}
.inputContainer {
  /*background-color: green;*/
  display: grid;
  grid-template-rows: 20% 80%;
  margin: 5px;
}
.inputPrint {
  /*background-color: orange;*/
  display: grid;
  grid-template-rows: 20% 80%;
  margin: 5px;
}
.inputMessage {
  /*background-color: rgb(244, 169, 244);*/
  text-align: center;
  margin: 5px;
}
.inputPrinter {
  /*background-color: red;*/
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
}
.keypad {
  /*background-color: blue;*/
  margin: 5px;
}
table {
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 60px;
  border: 1px solid #444444;
  border-radius: 5px;
}
td {
  border: 1px solid #444444;
  border-radius: 5px;
  width: 33%;
}
</style>
