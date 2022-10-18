<template>
  <div class="phoneContainer">
    <b-card class="cardContainer">
      <b-card-text>
        <div class="stampSelect">
          <div class="quantity">
            <div class="userHeader">
              <h2>{{ userPhone }} 님</h2>
              <p>고객 메모: {{ memo }}</p>
              <p>방문횟수: {{ visit }}회</p>
              <p>사용 가능 쿠폰: {{ completedCoupon }}개</p>
            </div>
            <div>
              <p>적용하실 갯수를 입력해 주세요.</p>
              <p>
                <span style="color: #dc3545">빨간색 버튼</span>은 5씩 증감,
                <span style="color: #ffc107">노란색 버튼</span>은 1씩 증감합니다.<br />
                <span style="color: grey; font-size: 15px">
                  적용하실 숫자를 입력 후 원하시는 기능의 버튼을 누르면 해당 숫자 만큼 적립 / 사용 됩니다!
                </span>
              </p>
              <div class="inputOrganizer">
                <b-btn pill size="sm" variant="outline-danger" @click="decrement(5)">-</b-btn>
                <b-btn class="ml-2" variant="outline-warning" @click="decrement(1)">-</b-btn>
                <div class="quantity">
                  <p>{{ quantity }}</p>
                </div>
                <b-btn class="mr-2" variant="outline-warning" @click="increment(1)">+</b-btn>
                <b-btn pill size="sm" variant="outline-danger" @click="increment(5)">+</b-btn>
              </div>
              <div>
                <!-- 버튼들 모아둘거임 -->
                <b-button block href="#" variant="primary">적립하기</b-button>
                <b-button block href="#" variant="primary">쿠폰 사용하기</b-button>
                <b-button block href="#" variant="primary">적립 취소</b-button>
              </div>
            </div>
          </div>
        </div>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Quantity',
  data() {
    return {
      quantity: 1,
      visit: '0',
      completedCoupon: '0',
      userPhone: '0119',
      memo: ''
    }
  },
  methods: {
    increment(n) {
      this.quantity = this.quantity + n
      return this.quantity
    },
    decrement(n) {
      if (this.quantity - n < 0) {
        this.quantity = 1
        return this.quantity
      } else {
        this.quantity = this.quantity - n
        return this.quantity
      }
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
  height: 100vh;
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
</style>
