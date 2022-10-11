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
                  <b-btn @click="$bvModal.show('modal-phone-infor')">폰번호 수정</b-btn>
                  <b-modal id="modal-phone-infor" title="폰번호 수정">
                    <b-form-group label="ownPhone" label-cols="3">
                      <b-form-input id="input-ownPhone" v-model="ownPhone" type="number"></b-form-input>
                    </b-form-group>
                  </b-modal>
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
                  <b-btn @click="$bvModal.show('modal-pass-infor')">비밀번호 수정</b-btn>
                  <b-modal id="modal-pass-infor" title="비밀번호 수정">
                    <b-form-group label="password" label-cols="3">
                      <b-form-input id="input-password" v-model="password" type="password"></b-form-input>
                    </b-form-group>
                  </b-modal>
                </b-col>
              </b-row>
              <b-button type="submit" variant="primary">저장</b-button>
              <b-button type="reset" variant="danger">취소</b-button>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </div>
    <password-edit />
  </div>
</template>
<script>
export default {
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
  methods: {}
}
</script>
<style></style>
