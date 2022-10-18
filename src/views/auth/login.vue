<template>
  <div class="LOGIN">
    <b-card class="login-box">
      <h2>Login</h2>
      <ValidationObserver ref="signUpForm" v-slot="{ handleSubmit, invalid, validate }">
        <b-form @submit.prevent="handleSubmit(OwnerLogin)">
          <b-form-group class="user-box">
            <ValidationProvider v-slot="{ errors }" name="userid" rules="required">
              <b-form-input
                v-model="userId"
                :counter="10"
                :error-messages="errors"
                required
                @keyup.enter="OwnerLogin"
              ></b-form-input>
              <label>User Id</label>
            </ValidationProvider>
          </b-form-group>
          <b-form-group class="user-box">
            <ValidationProvider v-slot="{ errors }" name="password" rules="required|min:6|max:20">
              <b-form-input
                v-model="password"
                :error-messages="errors"
                required
                type="password"
                @keyup.enter="OwnerLogin"
              ></b-form-input>
              <label>Password</label>
            </ValidationProvider>
          </b-form-group>
          <b-form-group>
            <button class="sub" variant="primary" :disabled="invalid || !validate" @click="OwnerLogin">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <b-spinner v-if="loading" type="submit" small></b-spinner> Submit
            </button>
          </b-form-group>
          <b-form-group>
            <b-button variant="primary" @click="signUp">회원가입</b-button>
            <b-button variant="primary" @click="find">ID/PW찾기</b-button>
          </b-form-group>
        </b-form>
      </ValidationObserver>
    </b-card>
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
  methods: {
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

<style>
.LOGIN {
  width: 100vw;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: linear-gradient(#141e30, #243b55);
}

.login-box {
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: #fff;
  box-sizing: border-box;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #5a38d4;
  text-align: center;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #5a38d4;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #5a38d4;
  outline: none;
  background: transparent;
}
.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #5a38d4;
  pointer-events: none;
  transition: 0.5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #5a38d4;
  font-size: 12px;
}

.login-box form .sub {
  position: relative;
  border: none;
  display: inline-block;
  padding: 10px 20px;
  color: #5a38d4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 4px;
  background-color: #fff;
}

.login-box .sub:hover {
  background: #fff;
  color: #5a38d4;
  border-radius: 5px;
  box-shadow: 0 0 5px #5a38d4, 0 0 15px #5a38d4;
}

.login-box .ath {
  color: rgb(219, 219, 219);
  margin: 10px;
  font-size: 12px;
  text-align: center;
}

.login-box .ath a {
  color: #5a38d4;
}

.login-box form .sub {
  left: 30%;
}

.login-box .sub span {
  position: absolute;
  display: block;
}

.login-box .sub span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #5a38d4);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}

.login-box .sub span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #5a38d4);
  animation: btn-anim2 1s linear infinite;
  animation-delay: 0.25s;
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}

.login-box .sub span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #5a38d4);
  animation: btn-anim3 1s linear infinite;
  animation-delay: 0.5s;
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}

.login-box .sub span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #5a38d4);
  animation: btn-anim4 1s linear infinite;
  animation-delay: 0.75s;
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}

.login-box .sub:hover span {
  animation: none;
}
</style>
