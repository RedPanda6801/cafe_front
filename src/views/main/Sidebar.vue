<template>
  <div class="SideBar">
    <b-list-group class="sidebarList">
      <div class="profile">
        <b-avatar button @click="$router.push('/mypage')"></b-avatar>
        <div class="nav-side-menu">{{ name }} 점장님, 반갑습니다</div>
      </div>
      <b-list-group-item class="sidebarListB" href="#" @click="$router.push('/main')">메인 화면</b-list-group-item>
      <b-list-group-item class="sidebarListB" href="#" @click="$router.push('/main/contact')"
        >문의하기</b-list-group-item
      >
      <b-list-group-item class="sidebarListB" href="#" @click="$router.push('/main/addcafe')"
        >지점등록</b-list-group-item
      >
      <div>
        <b-btn>모바일 입장</b-btn>
        <b-btn variant="success">테블릿 입장</b-btn>
      </div>
    </b-list-group>
  </div>
</template>

<script>
export default {}
</script>

<style>
.sidebarList {
  position: fixed;
  overflow: auto;
  height: 100vh;
  background-color: black;
}
.sidebarListB {
  background-color: black;
  color: #fff;
}
.profile {
  color: #fff;
}
</style>
