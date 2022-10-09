<template>
  <div>
    <b-list-group>
      <b-list-group-item>
        <b-avatar></b-avatar>
        <div class="nav-side-menu">{{ name }} 점장님, 반갑습니다</div>
      </b-list-group-item>
      <b-list-group-item href="#" @click="$router.push('/main')">메인 화면</b-list-group-item>
      <b-list-group-item href="#" @click="$router.push('/main/cafelist')">카페 리스트</b-list-group-item>
      <b-list-group-item href="#" @click="$router.push('/main/addcafe')">지점등록</b-list-group-item>
      <b-list-group-item href="#" @click="$router.push('/device')"></b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {}
</script>

<style>
.list-group {
  height: 100vh;
  background-color: black;
}
.list-group-item {
  background-color: black;
  color: #fff;
}
</style>
