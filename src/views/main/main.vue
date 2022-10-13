<template>
  <div class="maiNpage">
    <div class="cafelist">
      <h3>Cafe List</h3>
      <button class="cafeAddB" @click="$router.push('/main/addcafe')">
        <span class="Btext"><b-icon icon="plus-lg" scale="0.7"></b-icon> 카페추가하기</span>
        <!-- <b-icon icon="plus-lg" scale="0.7"></b-icon> 카페 추가하기 -->
      </button>
      <cafe-list />
    </div>
    <div class="footer">2022 My_Coupon &copy; All Rights Reserved.</div>
  </div>
</template>

<script>
import cafeList from '../../components/cafe/cafeList.vue'
export default {
  components: {
    cafeList
  }
}
</script>

<style>
.maiNpage {
  width: 100%;
  height: 100%;
}
.cafelist {
  width: 82vw;
  height: 700px;
  padding: 25px;
  /* background-color: aqua; */
}
.cafeAddB {
  width: 95%;
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
</style>
