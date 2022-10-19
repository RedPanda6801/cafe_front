<template>
  <div>
    <b-navbar toggleable="lg" type="light" style="background-color: transparent">
      <b-navbar-brand href="/"><img class="logoImg" src="../../../public/logo.png" /></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item class="navItem" href="#" @click="$router.push('/FAQ')">자주 묻는 질문</b-nav-item>
          <b-nav-item class="navItem" href="#">협약 기업</b-nav-item>
          <b-nav-item class="navItem" href="#">개발 크루 소개</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav v-show="!isLoggedin" class="ml-auto">
          <b-nav-item class="loginBBB" @click="$router.push('/auth/login')">로그인 / 회원가입</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav v-show="isLoggedin" class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <!-- <em>로그인 / 회원가입</em> -->
              <em class="loginName"><b-icon icon="person-fill"></b-icon> 마이페이지</em>
            </template>
            <b-dropdown-item class="downITem" href="#" @click="$router.push('/main')">카페 관리 페이지</b-dropdown-item>
            <b-dropdown-item class="downITem" href="#" @click="signOut">로그아웃</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  // data() {
  //   localStorage.getItem('token')
  // },
  data: () => ({
    GE_LOGIN_STATUS: localStorage.getItem('token')
  }),
  computed: {
    isLoggedin() {
      console.log(this.GE_LOGIN_STATUS)
      let login = false
      if (this.GE_LOGIN_STATUS) {
        login = true
      }
      // let login = true
      return login
    }
    // tokenUserName() {
    //   return this.$store.getters.TokenUser && this.$store.getters.TokenUser.name
    // }
  },
  methods: {
    onClick(path) {
      this.$router.push(path)
    },
    async signOut() {
      localStorage.removeItem('token')
      this.$router.go()
    }
  }
}
</script>

<style>
.logoImg {
  width: 125px;
  margin-left: 2vw;
  margin-right: 3vw;
}
.navItem {
  font-size: 13px;
  font-weight: bold;
  color: #2b2b2b;
  margin-right: 1.2vw;
  padding-left: 0.3vw;
  padding-right: 0.3vw;
  transition: 0.5s;
}
.navItem:hover {
  background-color: #edeef0;
  border-radius: 10px;
}
.loginBBB {
  font-size: 13px;
  font-weight: bold;
  color: #2b2b2b;
  padding-left: 0.3vw;
  padding-right: 0.3vw;
  transition: 0.5s;
}
.loginBBB:hover {
  background-color: #edeef0;
  border-radius: 10px;
}
.loginName {
  font-size: 13px;
  font-weight: bold;
  font-style: normal;
  color: #2b2b2b;
  padding-left: 0.3vw;
  padding-right: 0.3vw;
}
.downITem {
  font-size: 13px;
  font-weight: bold;
}
</style>
