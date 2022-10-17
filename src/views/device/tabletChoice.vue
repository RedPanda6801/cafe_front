<template>
  <div class="tabletContainer">
    <Sidemenu />
    <div class="tabletHeader">
      <p>입장하실 카페를 선택해주세요!</p>
    </div>
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
</template>

<script>
import axios from 'axios'
import Sidemenu from '../main/Sidemenu.vue'
export default {
  components: {
    Sidemenu
  },
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
      this.$router.push(`/tablet/${cafeId}`)
    }
  }
}
</script>

<style scoped>
.tabletContainer {
  height: 100%;
  width: 100%;
  margin-left: 50px;
}
.tabletHeader {
  margin-top: 50px;
  display: grid;
  justify-content: center;
  font-size: 50px;
}
.cafeBtn {
  width: 90%;
  height: 100px;
  border-radius: 30px;
  margin-top: 20px;
}
.listNone {
  align-items: center;
  color: grey;
  display: grid;
  grid-template-rows: 80% 20%;
  justify-content: center;
  font-size: 30px;
  margin-top: 50px;
}
.listNoneIcon {
  width: 250px;
  height: 250px;
  color: #eee;
}
.iconHolder {
  display: grid;
  justify-items: center;
}
</style>
