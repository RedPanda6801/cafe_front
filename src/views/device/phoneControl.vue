<template>
  <div class="phoneContainer">
    <b-card class="cardContainer">
      <b-card-text>
        <div class="stampSelect">
          <div class="quantity">
            <div class="returnBtnDiv">
              <button class="returnBtn" @click="$router.go(-1)">
                <span><b-icon icon="arrow-left"></b-icon> 돌아가기</span>
              </button>
            </div>
            <div class="userHeader">
              <h2>{{ userPhone }} 님</h2>
              <p>고객 메모: {{ memo }}</p>
              <p>방문횟수: {{ visit }}회</p>
              <p>사용 가능 쿠폰: {{ completedCoupon }}개</p>
            </div>
            <div>
              <p>적용하실 갯수를 입력해 주세요.</p>
              <div class="inputOrganizer">
                <b-btn pill size="sm" variant="outline-danger" @click="decrement(5)">-</b-btn>
                <b-btn class="ml-2" variant="outline-warning" @click="decrement(1)">-</b-btn>
                <div class="quantity">
                  <p style="font-size: 50px">{{ quantity }}</p>
                </div>
                <b-btn class="mr-2" variant="outline-warning" @click="increment(1)">+</b-btn>
                <b-btn pill size="sm" variant="outline-danger" @click="increment(5)">+</b-btn>
              </div>
              <p>
                <span style="color: #dc3545">빨간색 버튼</span>은 5씩 증감,
                <span style="color: #ffc107">노란색 버튼</span>은 1씩 증감합니다.<br />
                <span style="color: grey; font-size: 15px">
                  적용하실 숫자를 입력 후 원하시는 기능의 버튼을 누르면 해당 숫자 만큼 적립 / 사용 됩니다!
                </span>
              </p>
              <div>
                <!-- 버튼들 모아둘거임 -->
                <b-button block variant="primary" @click="addStamp">적립하기</b-button>
                <b-button block variant="primary" @click="useCoupon">쿠폰 사용하기</b-button>
                <b-button block variant="primary" @click="backToMain">적립 취소</b-button>
              </div>
            </div>
          </div>
        </div>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
// import axios from 'axios'
import { io } from 'socket.io-client'
export default {
  name: 'Quantity',
  data() {
    return {
      quantity: 1,
      visit: '',
      completedCoupon: '',
      userPhone: '',
      memo: '',
      userNumber: '',
      cafeId: '',
      socket: null
    }
  },
  async created() {
    this.socket = io(
      process.env.VUE_APP_URL + '/phone',
      {
        cors: { origin: '*' }
      },
      {
        extraHeaders: { token: localStorage.getItem('token') }
      }
    )
    this.socket.emit('token', localStorage.getItem('token'))
    this.socket.on('success', data => {
      ;(this.userNumber = data.data.custPhone),
        (this.cafeId = data.data.CafeId),
        (this.completedCoupon = data.data.leftStamp / 10),
        (this.visit = data.data.visit + 1),
        (this.memo = data.data.memo),
        (this.userPhone = this.userNumber.slice(-4))
    })
    this.socket.on('messages', messages => {
      //커스텀 이벤트
      this.receivedMessage = messages
    })
  },
  methods: {
    increment(n) {
      this.quantity = this.quantity + n
      return this.quantity
    },
    decrement(n) {
      if (this.quantity - n < 1) {
        this.quantity = 1
        return this.quantity
      } else {
        this.quantity = this.quantity - n
        return this.quantity
      }
    },
    async addStamp() {
      const body = {
        custPhone: this.userNumber,
        cafeId: this.cafeId,
        addCount: this.quantity
      }
      this.socket.emit('stack', body)
      this.quantity = 1
    },
    async useCoupon() {
      const body = {
        custPhone: this.userNumber,
        cafeId: this.cafeId,
        useCount: this.quantity
      }
      console.log(body.useCount)
      this.socket.emit('use', body)
      this.quantity = 1
    },
    backToMain() {
      // 암것도 안담아보내도 되는지... 소켓 확인 필요
      this.socket.emit('cancel', 'cancel')
    }
  }
}
</script>

<style scoped>
.phoneContainer {
  display: flex;
  justify-content: center;
  background-color: #5a38d4;
}
.stampSelect {
  height: 400px;
  width: 300px;
  justify-content: center;
  display: flex;
  align-content: center;
}
.quantity {
  width: 200px;
}
.userHeader {
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #ede9ff;
  color: #3f269a;
  display: grid;
  text-align: center;
  padding: 5px;
}
.cardContainer {
  height: 120vh;
  padding: 5px;
}
.inputOrganizer {
  display: flex;
  margin-bottom: 40px;
}
.quantity {
  display: grid;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
}
.returnBtn {
  border: none;
  background-color: #eee;
  border-radius: 5px;
  color: grey;
  width: 100px;
}
.returnBtn:active {
  filter: brightness(80%);
}
.returnBtnDiv {
  display: flex;
  justify-content: flex-end;
}
</style>
