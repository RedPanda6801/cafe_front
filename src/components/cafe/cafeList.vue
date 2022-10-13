<template>
  <div class="cafehomeList" @click="$router.push('/main/cafehome')">
    <div class="cafeList">
      <b-avatar icon="shop"></b-avatar>
      <span class="cafeName">카페이름</span>
      <span class="cafelocation">카페주소</span>
      <span>멤버쉽 만료기간</span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.cafehomeList {
  cursor: pointer;
}
.cafeList {
  padding: 10px;
  /* border: 1px solid black; */
  border-radius: 30px;
  transition: 0.5s;
  box-shadow: 2px 2px 2px 1px rgba(1, 1, 1, 0.1);
}
.cafeList:hover {
  background-color: rgba(232, 232, 232, 0.47);
}
.cafeName {
  margin: 0px 10px 0px 20px;
}
.cafelocation {
  margin: 0px 20px 0px 10px;
}
</style>
