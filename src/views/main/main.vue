<template>
  <div class="maiNpage">
    <div class="cafelist">
      <h3><b-icon icon="shop" scale="0.9"></b-icon> Cafe List</h3>
      <button class="cafeAddB" @click="$router.push('/main/addcafe')">
        <span class="Btext"><b-icon icon="plus-lg" scale="0.7"></b-icon> 카페추가하기</span>
        <!-- <b-icon icon="plus-lg" scale="0.7"></b-icon> 카페 추가하기 -->
      </button>
      <div class="List">
        <cafe-list v-for="cafeList in cafeLists" :key="cafeList.id" :cafe-list="cafeList" />
      </div>
    </div>
    <div class="footer">2022 My_Coupon &copy; All Rights Reserved</div>
  </div>
</template>

<script>
import cafeList from '../../components/cafe/cafeList.vue'
import axios from 'axios'
export default {
  components: {
    cafeList
  },
  data() {
    return {
      cafeLists: []
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
          this.cafeLists = res.data.data
          console.log('cafeList : ', res.data.data)
        })
        .catch(err => {
          console.log('cafeList -error : ', err)
        })
    }
  }
}
</script>

<style>
.maiNpage {
  width: 100%;
  height: 100vh;
}
.cafelist {
  width: 95%;
  height: 100vh;
  padding: 25px;
  /* background-color: aqua; */
}
.cafeAddB {
  width: 100%;
  height: 15vh;
  margin: 5px 0px 30px 0px;
  border: none;
  background-image: url('https://www.worldatlas.com/r/w768/upload/12/f8/83/coffee-cup.jpg');
  background-size: cover;
  font-size: 18px;
  color: #fff;
  border-radius: 20px;
  transition: 0.5s;
}
.cafeAddB:hover {
  filter: brightness(70%);
}
.footer {
  font-size: 12px;
  color: #fff;
  background: #708ab8;
  letter-spacing: 2px;
  text-align: center;
  padding: 3vh 5vw;
}
.List {
  width: 105%;
}
</style>
