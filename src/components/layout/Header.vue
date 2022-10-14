<template>
  <div>
    <b-navbar toggleable="lg" type="light" style="background-color: transparent">
      <b-navbar-brand href="/">My Coupon</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#asked">자주 묻는 질문</b-nav-item>
          <b-nav-item href="#">협약 기업</b-nav-item>
          <b-nav-item href="#">개발 크루 소개</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav v-show="!isLoggedin" class="ml-auto">
          <b-btn @click="$router.push('/auth/login')">로그인 / 회원가입</b-btn>
        </b-navbar-nav>

        <b-navbar-nav v-show="isLoggedin" class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <!-- <em>로그인 / 회원가입</em> -->
              <em>점장님</em>
            </template>
            <b-dropdown-item href="#" @click="$router.push('/main')">카페 관리 페이지</b-dropdown-item>
            <b-dropdown-item href="#" @click="signOut">로그아웃</b-dropdown-item>
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
      //console.log(this.GE_LOGIN_STATUS)
      let login = false
      if (this.GE_LOGIN_STATUS) {
        login = true
      }
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

<style></style>
