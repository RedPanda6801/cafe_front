<template>
  <div class="phoneContainer">
    <b-card class="cardContainer">
      <b-card-text>
        <b-btn>
          <b-icon icon="exclamation-circle"></b-icon>
        </b-btn>
        <div class="stampSelect">
          <div class="mt-5 quantity">
            <h4>입장하실 카페를 선택해 주세요!</h4>
            <div v-show="cafeLength === 0" class="listNone">
              <div class="iconHolder">
                <b-icon icon="exclamation-circle" class="listNoneIcon"></b-icon>
              </div>
              <span class="mt-4"><p>카페를 먼저 등록해 주세요!</p></span>
            </div>
            <div v-show="cafeLength > 0">
              <div v-for="(cafeList, index) in cafeLists" :key="cafeList.id">
                <button class="cafeBtn" @click="cafeRoute(cafeLists[index].id)">
                  {{ cafeLists[index].cafeName }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      cafeLists: [],
      cafeLength: ''
    }
  },
  mounted() {
    this.getCafeLists()
  },
  methods: {
    async getCafeLists() {
      await axios
        .get(process.env.VUE_APP_URL + '/cafe/info', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then(async res => {
          this.cafeLength = res.data.data.length
          for (let i = 0; i < res.data.data.length; i++) {
            this.cafeLists.push(res.data.data[i])
          }
          console.log('cafeList : ', this.cafeLists)
        })
        .catch(err => {
          console.log('cafeList -error : ', err)
        })
    },
    cafeRoute(cafeId) {
      this.$router.push(`/phone/${cafeId}`)
    }
  }
}
</script>

<style scoped>
.phoneContainer {
  display: flex;
  justify-content: center;
  background-color: #3f269a;
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
  color: #2c1876;
}
.cardContainer {
  height: 100vh;
  padding: 10px;
}
.iconHolder {
  display: grid;
  justify-items: center;
  margin-top: 20px;
}
.listNoneIcon {
  width: 250px;
  height: 250px;
  color: #eee;
}
.listNone {
  align-items: center;
  color: grey;
  display: grid;
  grid-template-rows: 80% 20%;
  justify-content: center;
  font-size: 20px;
  margin-top: 50px;
}
.cafeBtn {
  width: 95%;
  height: 100px;
  border-radius: 30px;
  border: none;
  background-color: #ede9ff;
  color: #3f269a;
  margin-top: 20px;
}
</style>
