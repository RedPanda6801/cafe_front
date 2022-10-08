<template>
  <div class="join">
    <!-- v-show로 인증 메일 보내기 전 페이지 -->
    <b-card no-body style="max-width: 50rem" img-src="#" img-alt="Image" img-top>
      <template #header>
        <h4 class="mb-0">여기에 이메일인증 위에는 사이트로고</h4>
      </template>

      <b-card-body>
        <b-card-sub-title class="mb-2">여기에 가입 진행상황 표기</b-card-sub-title>
        <b-card-title>인증 과정에서 사용하실 이메일 주소를 입력해 주세요.</b-card-title>
        <b-card-text>
          <b-input></b-input>
          <p>@</p>
          <b-input></b-input>
        </b-card-text>
      </b-card-body>

      <b-list-group flush>
        <b-list-group-item><b-button>인증메일 보내기</b-button></b-list-group-item>
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

    <!-- v-show로 인증메일 보낸 후 인증코드 입력할 페이지 -->
    <b-card no-body style="max-width: 50rem" img-src="#" img-alt="Image" img-top>
      <template #header>
        <h4 class="mb-0">여기에 이메일인증 위에는 사이트로고</h4>
      </template>

      <b-card-body>
        <b-card-sub-title class="mb-2">여기에 가입 진행상황 표기</b-card-sub-title>
        <b-card-title>이메일로 발송된 인증코드를 입력해 주세요.</b-card-title>
        <b-card-text>
          <b-input disabled placeholder="여기에 유저가 입력한 이메일 담길거"></b-input>
          <b-input class="mt-3 mb-3" placeholder="인증코드 입력"></b-input>
        </b-card-text>
      </b-card-body>

      <b-list-group flush>
        <b-list-group-item><b-button>인증 확인</b-button></b-list-group-item>
        <b-list-group-item><b-button>인증메일을 받지 못하셨나요?</b-button></b-list-group-item>
        <!-- <b-list-group-item>Vestibulum at eros</b-list-group-item> -->
      </b-list-group>

      <b-card-body>
        <a href="#" class="card-link">로그인창으로 돌아가기</a>
        <a href="#" class="card-link">Another link</a>
      </b-card-body>

      <b-card-footer>이용약관/개인정보 처리방침/고객센터 등 footer</b-card-footer>
    </b-card>
  </div>
</template>

<script>
export default {}
</script>

<style>
.join {
  display: flex;
  justify-content: center;
}
</style>
