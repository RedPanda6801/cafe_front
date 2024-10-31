<template>
  <div class="tabletContainer">
    <div v-show="socketPassed">
      <b-alert
        class="alertBox"
        :show="dismissCountDown"
        dismissible
        fade
        variant="secondary"
        @dismiss-count-down="countDownChanged"
        @input="onModalClose"
      >
        {{ alertMessage }}
      </b-alert>
    </div>
    <div v-show="!socketPassed" class="greetingContainer">
      <div class="userPhone">
        <p>{{ $route.params.id1 }} 님</p>
      </div>
      <div class="userGreeting">
        <p>{{ visit }} 번째 방문해 주셔서 감사합니다!</p>
      </div>
    </div>
    <div v-show="!socketPassed" class="stampContainer">
      <div class="stampHeader">
        <pre style="text-align: center">
          "스탬프는 10개당 쿠폰 1개로 교환됩니다.
          쿠폰 1장당 아이스 아메리카노 1장으로 교환해 드립니다."

          현재 사용 가능한 음료 쿠폰 : {{ completedCoupon }}개
        </pre>
      </div>
      <div class="stampBody">
        <div v-for="stamp in stackedStamp" :key="stamp" class="stampHolder">
          <img src="../../../public/stamp.png" class="stamp" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { io } from 'socket.io-client'
export default {
  data() {
    return {
      visit: '',
      completedCoupon: '',
      stackedStamp: '',
      custPhone: this.$route.params.id1,
      cafeId: this.$route.params.id,
      socketPassed: false,
      dismissSecs: 5,
      dismissCountDown: 0,
      alertMessage: ''
    }
  },
  async created() {
    this.socket = io(
      process.env.VUE_APP_URL + '/tablet',
      {
        cors: { origin: '*' }
      },
      {
        extraHeaders: { token: localStorage.getItem('token') }
      }
    )
    this.socket.emit('token', localStorage.getItem('token'))
    this.socket.on('success', data => this.showAlert(data))
    this.socket.emit('search', { custPhone: this.custPhone, cafeId: this.cafeId })

    this.socket.on('messages', messages => {
      //커스텀 이벤트
      this.receivedMessage = messages
    })
  },
  mounted() {
    this.getCouponInfo()
  },
  methods: {
    async getCouponInfo() {
      await axios
        .get(process.env.VUE_APP_URL + `/stamp/search/${this.$route.params.id1}/${this.$route.params.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then(async res => {
          console.log('res : ', res.data.data)
          this.visit = res.data.data.stamp.visit + 1
          this.completedCoupon = Math.floor(res.data.data.stamp.leftStamp / 10)
          this.stackedStamp = res.data.data.stamp.leftStamp % 10
        })
        .catch(err => {
          console.log('cafeList -error : ', err)
        })
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    onModalClose(show) {
      console.log('show', show)
      if (show === 0) {
        this.$router.push(`/tablet/${this.$route.params.id}`)
      }
    },
    showAlert(data) {
      console.log(data)
      if (data == 'stack') {
        this.socketPassed = true
        this.alertMessage = '적립이 완료되었습니다. 감사합니다!'
        this.dismissCountDown = this.dismissSecs
      } else if (data == 'use') {
        this.socketPassed = true
        this.alertMessage = '쿠폰 사용이 완료되었습니다. 감사합니다!'
        this.dismissCountDown = this.dismissSecs
      } else {
        this.socketPassed = true
        this.alertMessage = '메인 화면으로 돌아갑니다!'
        this.dismissCountDown = this.dismissSecs
      }
    }
  }
}
</script>

<style scoped>
.tabletContainer {
  height: 97vh;
  width: 100%;
  color: #120836;
  padding: 0px;
  display: grid;
  grid-template-rows: 30% 70%;
}
.stampContainer {
  display: grid;
  grid-template-rows: 20% 80%;
  margin: 5px;
}
.stampHeader {
  align-items: center;
  display: flex;
  font-size: 30px;
  justify-content: center;
  color: rgb(116, 107, 118);
}
.stampBody {
  margin: 10px;
  background-image: url('../../../public/stampBackground.png');
  background-size: 100% 100%;
  border: 5px;
  border-color: #6147be;
  border-style: outset;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 50% 50%;
  align-items: center;
}
.stampHolder {
  display: flex;
  justify-content: center;
}
.greetingContainer {
  display: grid;
  grid-template-rows: 60% 40%;
  margin: 5px;
}
.userPhone {
  align-items: center;
  clear: both;
  display: flex;
  justify-content: center;
  font-size: 65px;
}
.userGreeting {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
}
.stamp {
  width: 70%;
  transform: rotate(25deg);
}
.alertBox {
  display: grid;
  width: 100%;
  height: 100vh;
  text-align: center;
  align-items: center;
  font-size: 50px;
}
</style>
