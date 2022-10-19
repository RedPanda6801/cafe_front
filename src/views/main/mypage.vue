<template>
  <div class="MyPage">
    <h3><b-icon icon="person" scale="0.9"></b-icon> My Page</h3>
    <b-card title="회원정보" class="mpcard">
      <!-- <b-form @submit="onSubmit" @reset="onReset"> -->
      <b-row class="my-1">
        <b-col sm="3">
          <label for="id">아이디:</label>
        </b-col>
        <b-col sm="6">
          <p>{{ user.userId }}</p>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="3">
          <label>이름:</label>
        </b-col>
        <b-col sm="6">
          <p>{{ user.name }}</p>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="3">
          <label for="phone">폰번호:</label>
        </b-col>
        <b-col sm="6">
          <p v-if="show" id="phone">
            {{ user.ownerPhone }}
            <button v-if="show" class="PhoneB" variant="outline-primary" @click="show = !show">
              <b-icon icon="pencil" class="pencil"></b-icon>
            </button>
          </p>
          <div class="PHONEB">
            <b-input v-if="!show" v-model="ownerPhone"></b-input>
            <b-btn v-if="!show" variant="danger" @click="show = !show">취소</b-btn>
          </div>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="3">
          <label for="email">이메일:</label>
        </b-col>
        <b-col sm="6">
          <p id="email">{{ user.email }}</p>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="3">
          <label for="password">비밀번호:</label>
        </b-col>
        <b-col sm="6">
          <b-input v-if="!on" v-model="password" type="password"></b-input>
          <button v-if="on" class="PhoneB" variant="outline-primary" @click="on = !on">
            <b-icon icon="pencil" class="pencil"></b-icon>
          </button>
          <b-btn v-if="!on" variant="danger" @click="on = !on">취소</b-btn>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="10">
          <b-btn class="Save" variant="success" @click="updateprofile">저장</b-btn>
        </b-col>
      </b-row>
      <!-- <b-overlay :show="!show" no-wrap></b-overlay> -->
    </b-card>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data: () => ({
    user: {},
    ownerPhone: '',
    password: '',
    show: true,
    on: true
  }),
  mounted() {
    this.inforData()
  },
  methods: {
    async inforData() {
      await axios
        .get(process.env.VUE_APP_URL + '/profile/info', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then(async res => {
          this.user = res.data.data
          console.log('inforData - response: ', res.data.data)
        })
        .catch(err => {
          console.log('inforData - error: ', err)
        })
    },
    async updateprofile() {
      const axiosBody = {
        password: this.password,
        ownerPhone: this.ownerPhone
      }
      console.log('updateprofile - axiosBody', axiosBody)

      await axios
        .put(process.env.VUE_APP_URL + '/profile/update-profile', axiosBody, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then(response => {
          console.log('updateprofile - response : ', response)
          alert('회원정보가 수정 되었습니다.')
          this.$router.go()
        })
        .catch(error => {
          console.log('updateprofile - error : ', error)
        })
    }
  }
}
</script>
<style>
.MyPage {
  width: 100%;
  height: 100vh;
  padding: 25px;
}
.mpcard {
  width: 50%;
  height: 65vh;
  padding: 25px;
  margin-top: 20px;
  margin-left: 22vw;
  border: none;
  border-radius: 15px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);
}
.pencil {
  transition: 0.5s;
}
.PhoneB {
  width: 35px;
  height: 35px;
  background-color: #fff;
  border-radius: 20px;
  border: none;
  transition: 0.5s;
}
.PhoneB:hover {
  background-color: #432a9f;
}
.PhoneB:hover .pencil {
  color: #fff;
}
.PHONEB {
  display: grid;
  grid-template-columns: 4fr 2fr;
}
</style>
