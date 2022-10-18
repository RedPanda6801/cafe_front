<template>
  <div class="tabletContainer">
    <div class="greetingContainer">
      <div class="userPhone">
        <p>{{ $route.params.id1 }} 님</p>
      </div>
      <div class="userGreeting">
        <p>{{ visit }} 번째 방문해 주셔서 감사합니다!</p>
      </div>
    </div>
    <div class="stampContainer">
      <div class="stampHeader">
        <p>현재 사용 가능한 음료 쿠폰 : {{ completedCoupon }}개</p>
      </div>
      <!-- <h1>여기에 도장 현황 보여줄거야</h1> -->
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
export default {
  data() {
    return {
      visit: '',
      completedCoupon: '',
      stackedStamp: ''
    }
  },
  mounted() {
    console.log(this.$route.params)
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
          console.log('res : ', res.data.stamp)
          this.visit = res.data.stamp.visit + 1
          this.completedCoupon = res.data.stamp.leftStamp / 10
          this.stackedStamp = res.data.stamp.leftStamp % 10
        })
        .catch(err => {
          console.log('cafeList -error : ', err)
        })
    }
  }
}
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
  grid-template-rows: 20% 80%;
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
  background-image: url('../../../public/stampBackground.png');
  background-size: 100% 100%;
  border: 5px;
  border-color: rgb(0, 0, 0);
  border-style: solid;
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
.stamp {
  width: 70%;
}
</style>
