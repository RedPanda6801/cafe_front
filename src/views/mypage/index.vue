<template>
  <div>
    <h2>마이페이지</h2>
    <b-card style="max-width: 50rem">
      <p>기본정보</p>
      <b-row class="my-1">
        <b-col sm="2">
          <label for="name">아이디:</label>
        </b-col>
        <b-col sm="10">
          <b-form-input id="input-default" placeholder="아이디를 입력하세요" type="text"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="2">
          <label for="text">이름:</label>
        </b-col>
        <b-col sm="10">
          <b-form-input id="input-default" placeholder="이름을 입력하세요" type="text"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="2">
          <label for="number">폰번호:</label>
        </b-col>
        <b-col sm="10">
          <b-form-input id="input-default" placeholder="핸드폰 번호를 입력하세요" type="number"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="2">
          <label for="email">이메일:</label>
        </b-col>
        <b-col sm="10">
          <b-form-input id="input-default" placeholder="이메일을 입력하세요" type="email"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="2">
          <label for="password">비밀번호:</label>
        </b-col>
        <b-col sm="10">
          <b-form-input id="input-default" placeholder="비밀번호를 입력하세요" type="password"></b-form-input>
        </b-col>
      </b-row>
      <b-button>저장</b-button>
    </b-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    name: '',
    number: '',
    email: '',
    password: ''
  })
}
</script>
<style></style>
