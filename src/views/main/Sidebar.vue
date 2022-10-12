<template>
  <div>
    <b-list-group class="sidebarList">
      <b-list-group-item>
        <b-avatar button @click="$router.push('/mypage')"></b-avatar>
        <div class="nav-side-menu">{{ name }} 점장님, 반갑습니다</div>
      </b-list-group-item>
      <b-list-group-item class="sidebarListB" href="#" @click="$router.push('/main')">메인 화면</b-list-group-item>
      <b-list-group-item class="sidebarListB" href="#" @click="$router.push('/main/cafelist')"
        >카페 리스트</b-list-group-item
      >
      <b-list-group-item class="sidebarListB" href="#" @click="$router.push('/main/addcafe')"
        >지점등록</b-list-group-item
      >
    </b-list-group>
  </div>
</template>

<script>
export default {}
</script>

<style>
.sidebarList {
  height: 100vh;
  background-color: black;
}
.sidebarListB {
  background-color: black;
  color: #fff;
}
</style>
