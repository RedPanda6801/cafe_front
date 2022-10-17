<template>
  <div class="MyPage">
    <h2>마이페이지</h2>
    <b-card title="기본정보" class="mpcard">
      <!-- <b-form @submit="onSubmit" @reset="onReset"> -->
      <b-row class="my-1">
        <b-col sm="2">
          <label for="id">아이디:</label>
        </b-col>
        <b-col sm="8">
          <b-list-group-item id="Id">{{ user.userId }}</b-list-group-item>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="2">
          <label>이름:</label>
        </b-col>
        <b-col sm="8">
          <b-list-group-item>{{ user.name }}</b-list-group-item>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="2">
          <label for="phone">폰번호:</label>
        </b-col>
        <b-col sm="8">
          <b-list-group-item id="phone">{{ user.ownerPhone }}</b-list-group-item>
          <b-btn @click="$bvModal.show('modal-phone-infor')">폰번호 수정</b-btn>
          <b-modal id="modal-phone-infor" title="폰번호 수정">
            <b-form-group label="phone" label-cols="3">
              <b-form-input id="input-phone" type="number"></b-form-input>
            </b-form-group>
          </b-modal>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="2">
          <label for="email">이메일:</label>
        </b-col>
        <b-col sm="8">
          <b-list-group-item id="email">{{ user.email }}</b-list-group-item>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="2">
          <label for="password">비밀번호:</label>
        </b-col>
        <b-col sm="8">
          <b-btn @click="$bvModal.show('modal-pass-infor')">비밀번호 수정</b-btn>
          <b-modal id="modal-pass-infor" title="비밀번호 수정">
            <b-form-group label="password" label-cols="3">
              <b-form-input id="input-password" type="password"></b-form-input>
            </b-form-group>
          </b-modal>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data: () => ({
    user: {},
    ownerPhone: '',
    password: ''
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
  width: 80%;
  height: 70vh;
}
</style>
