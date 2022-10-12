<template>
  <div>
    <b-card>
      <h3>main</h3>
      <b-button @click="$router.push('/main/addcafe')">카페 추가하기</b-button>
      <div class="cafeList">
        <b-avatar></b-avatar>
        <span class="cafeName">카페이름</span>
        <span>위치</span>
      </div>
      <div>
        <!-- <b-table striped hover :items="items"></b-table> -->
      </div>
    </b-card>
  </div>
</template>

<script>
export default {}
</script>

<style>
.cafeList {
  padding: 10px;
  border: 1px solid black;
  border-radius: 30px;
  /* box-shadow: 5px 5px 5px 1px rgba(1, 1, 1, 0.1); */
}
.cafeName {
  margin-right: 5px;
}
</style>
