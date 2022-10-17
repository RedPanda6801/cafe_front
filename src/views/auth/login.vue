<template>
  <div>
    <div style="margin-top: 80px">
      <b-row align-h="center">
        <b-col cols="4">
          <b-card title="로그인">
            <ValidationObserver ref="signUpForm" v-slot="{ handleSubmit, invalid, validate }">
              <b-form @submit.prevent="handleSubmit(OwnerLogin)">
                <b-form-group label-cols="4" label-cols-lg="3" label="아이디" label-for="input-userid">
                  <ValidationProvider v-slot="{ errors }" name="userid" rules="required">
                    <b-form-input
                      id="input-userid"
                      v-model="userId"
                      :counter="10"
                      :error-messages="errors"
                      required
                      @keyup.enter="OwnerLogin"
                    ></b-form-input>
                  </ValidationProvider>
                </b-form-group>
                <b-form-group label-cols="4" label-cols-lg="3" label="패스워드" label-for="input-password">
                  <ValidationProvider v-slot="{ errors }" name="password" rules="required|min:6|max:20">
                    <b-form-input
                      id="input-password"
                      v-model="password"
                      :error-messages="errors"
                      required
                      type="password"
                      @keyup.enter="OwnerLogin"
                    ></b-form-input>
                  </ValidationProvider>
                </b-form-group>
                <b-form-group label-cols="4" label-cols-lg="3" label="로그인">
                  <b-button variant="primary" :disabled="invalid || !validate" @click="OwnerLogin"
                    ><b-spinner v-if="loading" type="submit" small></b-spinner> 로그인</b-button
                  >
                </b-form-group>
                <b-form-group>
                  <b-button variant="primary" @click="signUp">회원가입</b-button>
                  <b-button variant="primary" @click="find">ID/PW찾기</b-button>
                </b-form-group>
              </b-form>
            </ValidationObserver>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
// import jwtDecode from 'jwt-decode'
import Validate from '@/assets/mixins/Validate.vue'
import axios from 'axios'

export default {
  mixins: [Validate],
  data() {
    return {
      userId: '',
      password: '',
      loading: false
    }
  },
  // computed: {
  //   tokenUser() {
  //     return this.$store.getters.TokenUser
  //   },
  //   loading() {
  //     return this.$store.getters.TokenLoading
  //   },
  //   error() {
  //     return this.$store.getters.TokenError
  //   }
  // },
  // watch: {
  //   tokenUser(value) {
  //     if (value && value.id && value.id > 0) {
  //       // 로그인이 완료된 상황
  //       this.$router.push('/home') // 메인 페이지 이동
  //     }
  //   },
  //   error(errValue) {
  //     if (errValue !== null) {
  //       // 메세지 출력
  //       this.$bvToast.toast('아이디/비밀번호를 확인해 주세요.', {
  //         title: '로그인 에러',
  //         variant: 'danger',
  //         solid: true
  //       })
  //     }
  //   }
  // },
  // created() {
  //   // 이미 토큰을 가지고 있는 경우 처리를 위한 로직
  //   const token = window.localStorage.getItem('token')
  //   if (token) {
  //     const decodedToken = jwtDecode(token)
  //     const today = new Date()
  //     const expDate = new Date(decodedToken.exp * 1000)

  //     if (expDate && expDate >= today) {
  //       // 토큰이 유효한 경우
  //       this.$router.push('/home') // 메인 페이지 이동
  //     } else {
  //       // 토큰이 만료된 경우
  //       window.localStorage.removeItem('token') // 토큰 삭제
  //     }
  //   }
  // },
  methods: {
    // onSubmit() {
    //   this.$store.dispatch('authLogin', { userid: this.userid, password: this.password })
    // },
    async OwnerLogin() {
      if (this.loading) return
      this.loading = true
      const axiosBody = {
        userId: this.userId,
        password: this.password
      }
      //console.log('아시오스 들어오나', axiosBody)
      await axios
        .post(process.env.VUE_APP_URL + '/auth/login', axiosBody)
        .then(async res => {
          console.log(res)
          const code = res.data
          localStorage.setItem('token', res.data.token)
          console.log('/auth/login - response: ', code)
          this.$router.push('/main')
        })
        .catch(err => {
          alert('다시 시도해주세요!')
          console.log('/auth/login - error: ', err)
          this.loading = true
        })
    },
    signUp() {
      this.$router.push('/auth/join')
    },
    find() {
      this.$router.push('/auth/find')
    }
  }
}
</script>

<style lang="scss" scoped></style>
