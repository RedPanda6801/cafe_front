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
          {{ phone }}
        </div>
      </div>
      <div class="keypad">
        <!-- 번호 패드부분 -->
        <table>
          <tr>
            <td><button class="numberPad" @click="addNumber(1)">1</button></td>
            <td><button class="numberPad" @click="addNumber(2)">2</button></td>
            <td><button class="numberPad" @click="addNumber(3)">3</button></td>
          </tr>
          <tr>
            <td><button class="numberPad" @click="addNumber(4)">4</button></td>
            <td><button class="numberPad" @click="addNumber(5)">5</button></td>
            <td><button class="numberPad" @click="addNumber(6)">6</button></td>
          </tr>
          <tr>
            <td><button class="numberPad" @click="addNumber(7)">7</button></td>
            <td><button class="numberPad" @click="addNumber(8)">8</button></td>
            <td><button class="numberPad" @click="addNumber(9)">9</button></td>
          </tr>
          <tr>
            <td><button class="numberPad" @click="deleteNumber()">삭제</button></td>
            <td><button class="numberPad" @click="addNumber(0)">0</button></td>
            <td><button class="numberPad">확인</button></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: ''
    }
  },
  methods: {
    addNumber(num) {
      if (this.phone.length === 13) {
        return this.phone
      }
      this.phone = this.phone + num
      if (this.phone.length === 3) {
        this.phone = this.phone + '-'
        return this.phone
      } else if (this.phone.length === 8) {
        this.phone = this.phone + '-'
        return this.phone
      } else return this.phone
    },
    deleteNumber() {
      this.phone = this.phone.slice(0, -1)
      return this.phone
    }
  }
}
</script>

<style scoped>
.tabletContainer {
  height: 100vh;
  width: 100vw;
  /*background-color: black;*/
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
  background-color: rgb(249, 249, 249);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  font-size: 40px;
}
.keypad {
  /*background-color: blue;*/
  margin: 5px;
}
.numberPad {
  width: 95%;
  height: 95%;
  border: none;
  color: black;
  border-radius: 15px;
}
.numberPad:active {
  background-color: grey;
}

table {
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 45px;
  /*  border: 1px solid #444444;
  border-radius: 5px; */
}
td {
  /* border: 1px solid #444444;
  border-radius: 5px; */
  width: 33%;
}
</style>
