<template>
  <div class="join">
    <!--ID 찾기 누르면 이동할 페이지-->
    <b-card no-body style="max-width: 50rem" img-src="#" img-alt="Image" img-top>
      <template #header>
        <h4 class="mb-0">ID/PW 찾기 위에는 사이트로고</h4>
      </template>
      <!-- tab 만들어서 ID 찾기 / PW 찾기 왔다갔다 할 수 있게 할지, 따로따로 URL 만들지 고민 -->
      <div>
        <b-tabs content-class="mt-3">
          <b-tab title="아이디 찾기" active>
            <!-- 이메일 전송 버튼 누르기 전에 보여줄 창 -->
            <b-card-body>
              <b-card-title>아이디 찾기</b-card-title>
              <p>가입하실 때 입력하신 이메일과 성함을 입력해 주세요</p>
              <b-input placeholder="성함"></b-input>
              <b-input placeholder="이메일"></b-input>
            </b-card-body>
            <b-list-group flush>
              <b-list-group-item><b-button>이메일로 아이디 전송받기</b-button></b-list-group-item>
              <b-list-group-item>여기에 안내사항들 리스트로 표기 </b-list-group-item>
            </b-list-group>
            <!-- 이메일 전송 후에 보여줄 창 -->
            <b-card-body>
              <b-card-title>아이디 찾기</b-card-title>
              <p>입력하신 번호로 아이디를 전송해드렸습니다!</p>
              <b-button>혹시 이메일을 받지 못하셨나요?</b-button>
            </b-card-body>
            <b-list-group flush>
              <b-list-group-item><b-button>로그인 창으로 돌아가기</b-button></b-list-group-item>
              <b-list-group-item>여기에 안내사항들 리스트로 표기 </b-list-group-item>
            </b-list-group>
          </b-tab>
          <b-tab title="비밀번호 찾기">
            <!-- 이메일 전송 전에 보여줄 창 -->
            <b-card-body>
              <b-card-title>비밀번호 찾기</b-card-title>
              <p>가입하실 때 입력하신 이메일과 아이디, 성함을 입력해 주세요</p>
              <b-input placeholder="성함"></b-input>
              <b-input placeholder="아이디"></b-input>
              <b-input placeholder="이메일"></b-input>
            </b-card-body>
            <b-list-group flush>
              <b-list-group-item><b-button>이메일로 비밀번호 변경</b-button></b-list-group-item>
              <b-list-group-item>여기에 안내사항들 리스트로 표기 </b-list-group-item>
            </b-list-group>
            <!-- 이메일 전송 후 인증 전에 보여줄 창 -->
            <b-card-body>
              <b-card-title>비밀번호 찾기</b-card-title>
              <p>
                인증메일이 발송되었습니다.<br />
                이메일에서 인증을 완료해 주세요!
              </p>
            </b-card-body>
            <b-list-group flush>
              <b-list-group-item><b-button>혹시 이메일을 받지 못하셨나요?</b-button></b-list-group-item>
              <b-list-group-item>여기에 안내사항들 리스트로 표기 </b-list-group-item>
            </b-list-group>
            <!-- 이메일로 인증 후 보여줄 비밀번호 변경창 -->
            <b-card-body>
              <b-card-title>비밀번호 변경</b-card-title>
              <p>
                본인인증이 완료되었습니다. <br />
                변경하실 비밀번호를 입력해 주세요.
              </p>
              <b-input type="password" placeholder="변경하실 비밀번호를 입력해주세요"></b-input>
              <b-input type="password" placeholder="비밀번호 확인"></b-input>
            </b-card-body>
            <b-list-group flush>
              <b-list-group-item><b-button>비밀번호 변경하기</b-button></b-list-group-item>
              <b-list-group-item>여기에 안내사항들 리스트로 표기 </b-list-group-item>
            </b-list-group>
          </b-tab>
        </b-tabs>
      </div>

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
export default {}
</script>

<style>
.join {
  display: flex;
  justify-content: center;
}
</style>
