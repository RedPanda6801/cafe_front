<template>
  <div class="join">
    <!--인증 후 넘어올 페이지-->
    <ValidationObserver ref="signUpForm" v-slot="{ handleSubmit, invalid, validate }">
      <b-card no-body class="join-box">
        <h2><img class="logoImg" src="../../../public/logo.png" /></h2>
        <form @submit.prevent="handleSubmit(signUp)">
          <b-card-body style="text-align: center">
            <b-card-sub-title class="mt-3 mb-2">
              인증메일 전송 > 이메일 인증 >
              <span class="status"> 추가 정보 입력</span>
            </b-card-sub-title>
            <b-card-title style="margin: 20px">가입</b-card-title>
            <b-card-text>
              <!-- validation 넣을 예정 -->
              <ValidationProvider v-slot="{ errors }" name="name" rules="required">
                <b-input
                  id="name"
                  v-model="name"
                  :counter="5"
                  :error-messages="errors"
                  required
                  class="mb-1"
                  placeholder="성함을 입력해주세요"
                ></b-input>
              </ValidationProvider>
              <div class="mt-1 inputOrganize">
                <ValidationProvider v-slot="{ errors }" name="userId" rules="required|max:20">
                  <b-input
                    v-model="userId"
                    :counter="20"
                    :error-messages="errors"
                    required
                    class="mr-2 mb-1 inputId"
                    placeholder="이용하실 아이디를 입력해주세요"
                  ></b-input>
                </ValidationProvider>
                <button class="jung" @click="duplicationCheck">중복확인</button>
              </div>
              <b-input v-model="email" class="mb-1" disabled></b-input>
              <ValidationProvider v-slot="{ errors }" name="password" rules="required|min:6|max:20">
                <b-input
                  v-model="password"
                  :error-messages="errors"
                  required
                  class="mb-1"
                  placeholder="비밀번호"
                  type="password"
                ></b-input>
              </ValidationProvider>
              <ValidationProvider v-slot="{ errors }" name="pwCheck" rules="required|confirmed:password">
                <b-input
                  v-model="confirm"
                  :error-messages="errors"
                  required
                  class="mb-1"
                  placeholder="비밀번호확인"
                  type="password"
                ></b-input>
              </ValidationProvider>
              <ValidationProvider v-slot="{ errors }" name="phone" rules="required|max:11|min:11">
                <b-input v-model="phone" :error-messages="errors" class="mb-1" placeholder="휴대폰번호"></b-input>
              </ValidationProvider>
            </b-card-text>
          </b-card-body>

          <b-list-group flush>
            <b-list-group-item>
              <b-button block class="Ingle" type="submit" :disabled="invalid || !validate" @click="signUp">
                회원가입 완료
              </b-button>
            </b-list-group-item>
            <!-- <b-list-group-item>Vestibulum at eros</b-list-group-item> -->
          </b-list-group>
        </form>
        <b-card-body>
          <a href="/auth/login" class="card-link">로그인창으로 돌아가기</a>
        </b-card-body>
        <b-card-footer style="text-align: center">2022 My_Stamp &copy; All Rights Reserved.</b-card-footer>
        <!-- <b-card-img src="https://placekitten.com/480/210" alt="Image" bottom></b-card-img> -->
      </b-card>
    </ValidationObserver>
  </div>
</template>

<script>
import axios from 'axios'
import Validate from '@/assets/mixins/Validate.vue'
export default {
  mixins: [Validate],
  data() {
    return {
      email: '',
      name: '',
      userId: '',
      password: '',
      pwCheck: '',
      phone: '',
      loading: '',
      confirm: ''
    }
  },
  mounted() {
    this.checkAuth()
  },
  methods: {
    checkAuth() {
      if (!localStorage.getItem('email')) {
        alert('이메일 인증을 먼저 해주세요!')
        this.$router.push('/auth/join')
      } else {
        this.email = localStorage.getItem('email')
      }
    },
    async signUp() {
      console.log(process.env)
      if (this.loading) return
      this.loading = true
      const axiosBody = {
        name: this.name,
        email: this.email,
        userId: this.userId,
        password: this.password,
        phone: this.phone
      }
      console.log('auth/ register - axiosBody : ', axiosBody)
      await axios
        .post(process.env.VUE_APP_URL + '/auth/join', axiosBody)
        .then(async res => {
          const code = res.status
          console.log('auth/register - response: ', res)
          if (code == 400) {
            alert('이미 존재하는 아이디 입니다. 다시 입력해주세요!')
          } else if (code == 200) {
            alert('가입에 성공하셨습니다! 로그인 해주세요.')
            this.$router.push({ path: '/auth/login' })
          } else {
            alert('가입에 실패했습니다. 다시 시도해주세요.')
            this.$router.go(0)
          }
        })
        .catch(err => {
          alert('다시 시도해주세요!')
          console.log('errerr', err)
        })
    },
    async duplicationCheck() {
      console.log(process.env)
      const axiosBody = {
        userId: this.userId
      }
      console.log('duplication check - axiosBody : ', axiosBody)
      await axios
        .get(process.env.VUE_APP_URL + '/auth/check-id/' + axiosBody.userId)
        .then(async res => {
          const code = res.status
          console.log('check code : ', code)
          if (code == 200) {
            alert('사용 가능한 아이디 입니다.')
          } else if (code == 400) {
            alert('이미 사용중인 아이디 입니다. 다른 아이디를 지정해 주세요!')
          }
        })
        .catch(err => {
          alert('이미 사용중인 아이디 입니다. 다른 아이디를 지정해 주세요!')
          console.log(err)
        })
    }
  }
}
</script>

<style>
.Ingle {
  background-color: #5a38d4;
  font-weight: bold;
  transition: 0.5s;
}
.Ingle:hover {
  background-color: #432a9f;
}
.join-box {
  overflow: hidden;
  position: absolute;
  top: 62%;
  left: 50%;
  width: 550px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: #fff;
  box-sizing: border-box;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  z-index: 1;
}
.join-box h2 {
  padding: 0;
  color: #5a38d4;
  text-align: center;
}
.jung {
  width: 10vw;
  font-size: 14px;
  font-weight: bold;
  background-color: #5a38d4;
  border: none;
  border-radius: 5px;
  color: #fff;
  margin-bottom: 3px;
  transition: 0.5s;
}
.jung:hover {
  background-color: #432a9f;
}
.join {
  height: 850px;
  display: flex;
  justify-content: center;
}
.status {
  font-weight: bolder;
  color: black;
}
.inputOrganize {
  display: flex;
}
.inputId {
  width: 310px;
}
</style>
