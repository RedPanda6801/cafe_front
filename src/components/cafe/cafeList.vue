<template>
  <div class="cafehomeList" @click="$router.push('/main/cafehome')">
    <div class="cafeList">
      <b-avatar icon="shop"></b-avatar>
      <span class="cafeName">카페이름</span>
      <span class="cafelocation">카페주소</span>
      <span class="cafeTime">멤버쉽 만료기간</span>
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
  width: 95%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border-radius: 30px;
  transition: 0.5s;
  box-shadow: 2px 2px 2px 1px rgba(1, 1, 1, 0.1);
}
.cafeList:hover {
  background-color: rgba(232, 232, 232, 0.47);
}
.cafeName {
  margin-top: 10px;
  width: 10vw;
  text-align: center;
  /* background-color: azure; */
}
.cafelocation {
  margin-top: 10px;
  width: 35vw;
  text-align: center;
  /* background-color: aqua; */
}
.cafeTime {
  margin-top: 10px;
  width: 20vw;
  text-align: center;
  /* background-color: fuchsia; */
}
</style>
