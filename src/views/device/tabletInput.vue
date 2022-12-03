<template>
  <div class="tabletContainer">
    <div class="cafeContainer">
      <!-- 여기는 카페 정보부분 -->
      <div class="cafeName">
        <!-- 카페이름 -->
        <p>{{ cafeName }}</p>
      </div>
      <div class="cafeBanner">
        <img v-if="cafeImg === null" src="../../../public/cafeDefault.png" class="banner" />
        <img v-else :src="`${url}/uploads/${cafeImg}`" class="banner" />
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
            <td><button class="stringPad" @click="deleteNumber">삭제</button></td>
            <td><button class="numberPad" @click="addNumber(0)">0</button></td>
            <td>
              <button id="show-btn" class="stringPad" @click="$bvModal.show('confirmModal')">확인</button>
              <b-modal id="confirmModal" size="xl" centered backdrop hide-footer>
                <template #modal-title>입력하신 번호를 확인해 주세요!</template>
                <div class="confirmContainer">
                  <p class="confirmMessage">{{ phone }}으로</p>
                  <p class="confirmMessage">적립하시겠습니까?</p>
                </div>
                <div class="d-block text-center btnOrganizer">
                  <b-button class="modalBtn" @click="submit">네</b-button>
                  <b-button class="modalBtn" @click="reset">아니오</b-button>
                </div>
              </b-modal>
            </td>
            <!-- <td><button class="numberPad" @click="confirmMessage">확인</button></td> -->
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'TabletInput',
  data() {
    return {
      phone: '',
      confirmModal: false,
      cafeName: '',
      cafeId: '',
      cafeImg: '',
      url: ''
    }
  },
  mounted() {
    this.getCafeInfo()
  },
  methods: {
    async getCafeInfo() {
      await axios
        .get(process.env.VUE_APP_URL + `/cafe/info-one/${this.$route.params.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then(async res => {
          this.url = process.env.VUE_APP_URL
          this.cafeName = res.data.data.cafeName
          this.cafeId = res.data.data.id
          this.cafeImg = res.data.data.img
        })
        .catch(err => {
          console.log('cafeList -error : ', err)
        })
    },
    async getCouponInfo() {
      await axios
        .get(process.env.VUE_APP_URL + `/stamp/search/${this.phone}/${this.cafeId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then(async res => {
          this.$router.push(`/tablet/${this.cafeId}/${this.phone}`)
        })
        .catch(err => {
          console.log('cafeList -error : ', err)
        })
    },
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
    },
    confirmMessage() {
      this.$bvModal.hide('confirmModal')
    },
    reset() {
      this.$bvModal.hide('confirmModal')
      this.phone = ''
    },
    submit() {
      this.getCouponInfo()
      this.$bvModal.hide('confirmModal')
    }
  }
}
</script>

<style scoped>
.tabletContainer {
  height: 100%;
  width: 100%;
  padding-top: 40px;
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
  width: 100%;
  font-size: 50px;
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
  font-size: 60px;
  letter-spacing: 5px;
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
.stringPad {
  width: 95%;
  height: 95%;
  border: none;
  color: white;
  border-radius: 15px;
  background-color: #573cb8;
}
.numberPad:active {
  background-color: grey;
  color: white;
}
.stringPad:active {
  background-color: #29166d;
}
.btnOrganizer {
  display: grid;
  grid-template-columns: 50% 50%;
  margin: 5px;
  justify-content: space-between;
}
.modalBtn {
  width: 45%;
  height: 5%;
  margin: 5px;
}
.confirmContainer {
  height: 300px;
  font-size: 60px;
  /* display: grid;
  grid-template-rows: 50% 50%; */
}
.confirmMessage {
  display: grid;
  align-content: center;
  justify-content: center;
}
table {
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 45px;
}
td {
  width: 33%;
}
</style>
