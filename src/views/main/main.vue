<template>
  <div class="maiNpage">
    <div class="cafelist">
      <h3>Cafe List</h3>
      <b-button class="cafeAddB" @click="$router.push('/main/addcafe')"
        ><b-icon icon="plus-lg" scale="0.7"></b-icon> 카페 추가하기</b-button
      >
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
  height: 800px;
  padding: 20px;
  /* background-color: aqua; */
}
.cafeAddB {
  width: 40vw;
  height: 10vh;
  margin: 5px 0px 30px 0px;
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
