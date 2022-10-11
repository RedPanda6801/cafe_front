<template>
  <div class="join">
    <!--인증 후 넘어올 페이지-->
    <b-card no-body style="max-width: 50rem" img-src="#" img-alt="Image" img-top>
      <template #header>
        <h4 class="mb-0">여기에 이메일인증 위에는 사이트로고</h4>
      </template>
      <form @submit.prevent="handleSubmit(signUp)">
        <b-card-body>
          <b-card-sub-title class="mt-3 mb-2">
            인증메일 전송 > 이메일 인증 >
            <span class="status"> 추가 정보 입력</span>
          </b-card-sub-title>
          <b-card-title>가입</b-card-title>
          <b-card-text>
            <!-- validation 넣을 예정 -->
            <b-input
              id="name"
              v-model="$v.form.name.$model"
              class="mb-1"
              :state="validateState('name')"
              placeholder="성함을 입력해주세요"
            ></b-input>
            <div class="mt-1 inputOrganize">
              <b-input
                v-model="$v.form.userId.$model"
                class="mr-5 mb-1 inputId"
                :state="validateState('userId')"
                placeholder="이용하실 아이디를 입력해주세요"
                maxlength="20"
              ></b-input>
              <b-button class="mb-1" @click="duplicationCheck">중복확인</b-button>
            </div>
            <b-input v-model="v.form.email.$model" class="mb-1" :state="validateState('email')" disabled></b-input>
            <b-input
              v-model="v.form.password.$model"
              class="mb-1"
              :state="validateState('password')"
              placeholder="비밀번호"
              type="password"
            ></b-input>
            <b-input
              v-model="v.form.pwCheck.$model"
              class="mb-1"
              :state="validateState('pwCheck')"
              placeholder="비밀번호확인"
              type="password"
            ></b-input>
            <b-input
              v-model="v.form.phone.$model"
              class="mb-1"
              :state="validateState('phone')"
              placeholder="휴대폰번호"
            ></b-input>
          </b-card-text>
        </b-card-body>

        <b-list-group flush>
          <b-list-group-item><b-button block @click="signUp">회원가입 완료</b-button></b-list-group-item>
          <b-list-group-item>여기에 안내사항들 리스트로 표기 </b-list-group-item>
          <!-- <b-list-group-item>Vestibulum at eros</b-list-group-item> -->
        </b-list-group>
      </form>
      <b-card-body>
        <a href="/auth/login" class="card-link">로그인창으로 돌아가기</a>
      </b-card-body>
      <b-card-footer>이용약관/개인정보 처리방침/고객센터 등 footer</b-card-footer>
      <!-- <b-card-img src="https://placekitten.com/480/210" alt="Image" bottom></b-card-img> -->
    </b-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      email: '',
      name: '',
      userId: '',
      password: '',
      pwCheck: '',
      phone: '',
      loading: ''
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
.join {
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
  width: 300px;
}
</style>
