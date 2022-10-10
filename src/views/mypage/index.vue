<template>
  <div>
    <div style="margin-top: 80px">
      <b-row align-h="center">
        <b-col cols="4">
          <h2>마이페이지</h2>
          <b-card title="기본정보" style="max-width: 50rem">
            <b-form @submit="onSubmit" @reset="onReset">
              <b-row class="my-1">
                <b-col sm="2">
                  <label for="name">아이디:</label>
                </b-col>
                <b-col sm="10">
                  <b-form-input id="id" placeholder="아이디를 입력하세요" type="text"></b-form-input>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col sm="2">
                  <label for="text">이름:</label>
                </b-col>
                <b-col sm="10">
                  <b-form-input id="name" placeholder="이름을 입력하세요" type="text"></b-form-input>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col sm="2">
                  <label for="number">폰번호:</label>
                </b-col>
                <b-col sm="10">
                  <b-form-input id="ownPhone" placeholder="핸드폰 번호를 입력하세요" type="number"></b-form-input>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col sm="2">
                  <label for="email">이메일:</label>
                </b-col>
                <b-col sm="10">
                  <b-form-input id="email" placeholder="이메일을 입력하세요" type="email"></b-form-input>
                </b-col>
              </b-row>
              <b-row class="my-1">
                <b-col sm="2">
                  <label for="password">비밀번호:</label>
                </b-col>
                <b-col sm="10">
                  <b-form-input id="password" placeholder="비밀번호를 입력하세요" type="password"></b-form-input>
                </b-col>
              </b-row>
              <b-button type="submit">저장</b-button>
              <b-button type="reset">취소</b-button>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    Owner: {
      id: '',
      name: '',
      number: '',
      email: '',
      password: ''
    }
  })
}
</script>
<style></style>
