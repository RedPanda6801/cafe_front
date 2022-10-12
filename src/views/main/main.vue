<template>
  <div>
    <b-card class="cafelist">
      <h3>Cafe List</h3>
      <b-button class="cafeAddB" @click="$router.push('/main/addcafe')"
        ><b-icon icon="plus-lg" scale="0.7"></b-icon> 카페 추가하기</b-button
      >
      <cafe-list />
    </b-card>
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
.cafelist {
  width: 82vw;
  height: 1200px;
  padding: 15px;
}
.cafeAddB {
  width: 40vw;
  height: 10vh;
  margin: 5px 0px 30px 0px;
}
</style>
