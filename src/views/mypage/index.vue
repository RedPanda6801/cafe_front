<template>
  <div>
    <div style="margin-top: 80px">
      <b-row align-h="center">
        <b-col cols="6">
          <h2>마이페이지</h2>
          <b-card title="기본정보" style="max-width: 55rem">
            <b-form @submit="onSubmit" @reset="onReset">
              <b-row class="my-1">
                <b-col sm="2">
                  <label for="name">아이디:</label>
                </b-col>
                <b-col sm="10">
                  <b-form-list id="id" type="text">아이디</b-form-list>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col sm="2">
                  <label for="text">이름:</label>
                </b-col>
                <b-col sm="10">
                  <b-form-list id="name" type="text">이름</b-form-list>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col sm="2">
                  <label for="number">폰번호:</label>
                </b-col>
                <b-col sm="10">
                  <b-form-list id="ownPhone" type="number">폰번호</b-form-list>
                  <b-btn @click="onClickEdit">폰번호 수정</b-btn>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col sm="2">
                  <label for="email">이메일:</label>
                </b-col>
                <b-col sm="10">
                  <b-form-list id="email" type="email">이메일</b-form-list>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col sm="2">
                  <label for="password">비밀번호:</label>
                </b-col>
                <b-col sm="10">
                  <b-form-list id="password" type="password">비번</b-form-list>
                  <b-btn>비밀번호 수정</b-btn>
                </b-col>
              </b-row>
              <b-button type="submit" variant="primary">저장</b-button>
              <b-button type="reset" variant="danger">취소</b-button>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </div>
    <PhoneEditModal />
  </div>
</template>
<script>
import PhoneEditModal from './PhoneEditModal.vue'

export default {
  components: {
    PhoneEditModal
  },
  data: () => ({
    // fields: [
    //   { key: 'ownPhone', label: '폰번호' },
    //   { key: 'password', label: '비밀번호' }
    // ],
    id: '',
    name: '',
    number: '',
    email: '',
    password: ''
  }),
  methods: {
    onClickEdit() {
      this.$bvModal.show('modal-owner-infor')
    }
  }
}
</script>
<style></style>
