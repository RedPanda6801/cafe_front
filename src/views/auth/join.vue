<template>
  <div class="join">
    <!--인증 후 넘어올 페이지-->
    <b-card no-body style="max-width: 50rem" img-src="#" img-alt="Image" img-top>
      <template #header>
        <h4 class="mb-0">여기에 이메일인증 위에는 사이트로고</h4>
      </template>

      <b-card-body>
        <b-card-sub-title class="mt-3 mb-2">
          인증메일 전송 > 이메일 인증 >
          <span class="status"> 추가 정보 입력</span>
        </b-card-sub-title>
        <b-card-title>가입</b-card-title>
        <b-card-text>
          <!-- validation 넣을 예정 -->
          <b-input id="userName" v-model="userName" class="mb-1" placeholder="성함을 입력해주세요"></b-input>
          <div class="mt-1 inputOrganize">
            <b-input class="mr-5 mb-1 inputId" placeholder="이용하실 아이디를 입력해주세요" maxlength="20"></b-input>
            <b-button class="mb-1">중복확인</b-button>
          </div>
          <b-input class="mb-1" disabled placeholder="인증한 이메일 주소 보여주는 용"></b-input>
          <b-input class="mb-1" placeholder="비밀번호" type="password"></b-input>
          <b-input class="mb-1" placeholder="비밀번호확인" type="password"></b-input>
          <b-input class="mb-1" placeholder="휴대폰번호"></b-input>
        </b-card-text>
      </b-card-body>

      <b-list-group flush>
        <b-list-group-item><b-button block>회원가입 완료</b-button></b-list-group-item>
        <b-list-group-item>여기에 안내사항들 리스트로 표기 </b-list-group-item>
        <!-- <b-list-group-item>Vestibulum at eros</b-list-group-item> -->
      </b-list-group>

      <b-card-body>
        <a href="#" class="card-link">로그인창으로 돌아가기</a>
        <a href="#" class="card-link">Another link</a>
      </b-card-body>

      <b-card-footer>이용약관/개인정보 처리방침/고객센터 등 footer</b-card-footer>
      <!-- <b-card-img src="https://placekitten.com/480/210" alt="Image" bottom></b-card-img> -->
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: ''
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
