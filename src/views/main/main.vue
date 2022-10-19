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
    <footer>
      <div class="Mfooter">
        <div>
          <img class="logoImg" src="../../../public/whitelogo.png" style="margin-top: 20px" />
        </div>
        <div style="margin: 20px">
          <p>
            서울특별시 강남구 테헤란로4길 38-5 | 마이스탬프 | my_stamp@naver.com<br />2022 My_Stamp &copy; All Rights
            Reserved.
          </p>
          <div class="ICON">
            <b-icon icon="instagram" scale="2" variant="white" style="margin-right: 20px"></b-icon>
            <b-icon icon="github" scale="2" variant="white"></b-icon>
          </div>
        </div>
      </div>
    </footer>
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
.Mfooter {
  /* margin-top: 161px; */
  font-size: 12px;
  color: #fff;
  background: #5a38d4;
  letter-spacing: 2px;
  padding: 2vh 5vw;
  display: flex;
  justify-content: center;
}
.AddCafe {
  margin: 25px;
}
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
.List {
  width: 105%;
}
.ICON {
  margin-left: 5px;
}
</style>
