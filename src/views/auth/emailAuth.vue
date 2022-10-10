<template>
  <div class="join">
    <!-- v-show로 인증 메일 보내기 전 페이지 -->
    <div v-show="!emailSent">
      <b-card no-body style="max-width: 50rem" img-src="#" img-alt="Image" img-top>
        <template #header>
          <h4 class="mb-0">여기에 이메일인증 위에는 사이트로고</h4>
        </template>
        <form @submit.prevent="handleSubmit(sendEmail)">
          <b-card-body>
            <b-card-sub-title class="mt-3 mb-2">
              <span class="status">인증메일 전송 </span>
              > 이메일 인증 > 추가 정보 입력
            </b-card-sub-title>
            <b-card-title>
              인증 과정에서 사용하실<br />
              이메일 주소를 입력해 주세요.
            </b-card-title>
            <b-card-text>
              <div class="emailInput">
                <b-input-group append="@" class="mr-2">
                  <b-form-input v-model="emailId" placeholder="이메일 아이디"></b-form-input>
                </b-input-group>
                <b-form-select v-model="emailProvider" :options="options"></b-form-select>
              </div>
            </b-card-text>
          </b-card-body>

          <b-list-group flush>
            <b-list-group-item>
              <b-button block variant="outline-dark" @click="sendEmail">인증메일 보내기</b-button>
            </b-list-group-item>
            <b-list-group-item>
              - 입력하신 이메일로 인증코드가 전송됩니다.<br />
              - 이메일은 추후 계정 찾기에 이용됩니다.
            </b-list-group-item>
            <!-- <b-list-group-item>Vestibulum at eros</b-list-group-item> -->
          </b-list-group>
        </form>
        <b-card-body>
          <a href="/auth/login" class="card-link">로그인창으로 돌아가기</a>
        </b-card-body>

        <b-card-footer>이용약관/개인정보 처리방침/고객센터 등 footer</b-card-footer>
        <!-- <b-card-img src="https://placekitten.com/480/210" alt="Image" bottom></b-card-img> -->
      </b-card>
    </div>
    <!-- v-show로 인증메일 보낸 후 인증코드 입력할 페이지 -->
    <div v-show="emailSent">
      <b-card no-body style="max-width: 50rem" img-src="#" img-alt="Image" img-top>
        <template #header>
          <h4 class="mb-0">여기에 이메일인증 위에는 사이트로고</h4>
        </template>
        <form @submit.prevent="handleSubmit(authCode)">
          <b-card-body>
            <b-card-sub-title class="mt-3 mb-2">
              인증메일 전송 >
              <span class="status"> 이메일 인증 </span>
              > 추가 정보 입력
            </b-card-sub-title>
            <b-card-title>이메일로 발송된 인증코드를 입력해 주세요.</b-card-title>
            <b-card-text>
              <!-- 백 서버 연결 후 이메일 제대로 담기게 기능 구현 예정 -->
              <b-input disabled placeholder="여기에 유저가 입력한 이메일 담길거"></b-input>
              <b-input class="mt-3 mb-3" maxlength="6" placeholder="인증코드 입력"></b-input>
            </b-card-text>
          </b-card-body>

          <b-list-group flush>
            <b-list-group-item><b-button block variant="outline-dark">인증 확인</b-button></b-list-group-item>
            <b-list-group-item>
              <div>
                <button id="show-btn" class="modalBtn" @click="$bvModal.show('emailModal')">
                  인증메일을 받지 못하셨나요?
                </button>
                <b-modal id="emailModal" hide-footer>
                  <template #modal-title>인증메일을 받지 못하셨나요?</template>
                  <div class="d-block text-center">
                    <b-button block @click="resend">이메일 재전송하기</b-button>
                  </div>
                  <b-button class="mt-3" block @click="newEmail">다른 이메일로 전송하기</b-button>
                </b-modal>
              </div>
            </b-list-group-item>
            <!-- <b-list-group-item>Vestibulum at eros</b-list-group-item> -->
          </b-list-group>
        </form>
        <b-card-body>
          <a href="/auth/login" class="card-link">로그인창으로 돌아가기</a>
        </b-card-body>

        <b-card-footer>이용약관/개인정보 처리방침/고객센터 등 footer</b-card-footer>
      </b-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      emailId: '',
      emailProvider: null,
      tempEmail: '',
      emailSent: false,
      options: [
        { value: null, text: '이메일을 선택해 주세요' },
        { value: 'gmail', text: 'gmail.com' },
        { value: 'naver', text: 'naver.com' },
        { value: 'daumt', text: 'daum.net' },
        { value: 'kakao', text: 'kakao.com' }
      ]
    }
  },
  methods: {
    authCode() {
      const email =
        this.emailProvider === 'daum' ? `${this.emailId}@daum.net` : `${this.emailId}@${this.emailProvider}.com`
      const user = JSON.parse(localStorage.getItem('auth'))
      console.log('유저 : ', user)
      axios
        .post(process.env.VUE_APP_URL + '/mail/process-code', {
          email: email,
          code: this.inputCode,
          hash: user.hash,
          provider: user.emailProvider
        })
        .then(response => {
          console.log('auth success : ', response)
          alert('이메일 인증에 성공하셨습니다. 회원가입 페이지로 넘어갑니다.')
          localStorage.setItem('email', user.email)
          localStorage.removeItem('auth')
          this.$router.push('/auth/join/info')
        })
        .catch(error => {
          console.log('auth fail : ', error)
        })
    },
    sendEmail() {
      const email =
        this.emailProvider === 'daum' ? `${this.emailId}@daum.net` : `${this.emailId}@${this.emailProvider}.com`
      this.tempEmail = email
      alert(`"${email}"로 이메일을 발송합니다.`)
      axios
        .get(process.env.VUE_APP_URL + `/mail/send-email/${email}`)
        .then(response => {
          console.log('email sent : ', response)
          if (localStorage.getItem('auth')) {
            localStorage.removeItem('auth')
          }
          this.emailSent = true
          localStorage.setItem('auth', JSON.stringify(response.data.user))
        })
        .catch(error => {
          console.log('email fail : ', error)
        })
    },
    resend() {
      this.sendEmail()
      this.$bvModal.hide('emailModal')
    },
    newEmail() {
      this.emailSent = false
      this.$bvModal.hide('emailModal')
    }
  }
}
</script>

<style>
.join {
  display: flex;
  justify-content: center;
}
.emailInput {
  display: flex;
}
.status {
  font-weight: bolder;
  color: black;
}
.modalBtn {
  border: none;
  color: grey;
  background-color: white;
}
</style>
