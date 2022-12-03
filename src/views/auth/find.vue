<template>
  <div class="find">
    <b-card no-body class="joinContainer">
      <template #header>
        <h4 class="mb-0">ID/PW 찾기</h4>
      </template>
      <div>
        <b-tabs content-class="mt-3">
          <b-tab title="아이디 찾기" active>
            <!-- 이메일 전송 버튼 누르기 전에 보여줄 창 -->
            <div v-show="!emailSent">
              <form @submit.prevent="handleSubmit(sendEmail)">
                <b-card-body>
                  <b-card-title>아이디 찾기</b-card-title>
                  <p>가입하실 때 입력하신 이메일과 성함을 입력해 주세요</p>
                  <b-input v-model="name" class="mb-1" placeholder="성함"></b-input>
                  <b-input v-model="email" placeholder="이메일"></b-input>
                </b-card-body>
                <b-list-group flush>
                  <b-list-group-item>
                    <b-button @click="sendEmail">이메일로 아이디 전송받기</b-button>
                  </b-list-group-item>
                  <b-list-group-item>
                    <p class="findMessage">
                      아이디 찾기 기능은 고객님들의 개인정보 보호를 위해<br />
                      아이디의 일부만 보여드리는 형식으로 진행됩니다.
                    </p>
                  </b-list-group-item>
                </b-list-group>
              </form>
            </div>
            <!-- 이메일 전송 후에 보여줄 창 -->
            <div v-show="emailSent">
              <b-card-body>
                <b-card-title>아이디 찾기</b-card-title>
                <p>입력하신 번호로 아이디를 전송해드렸습니다!</p>
                <b-list-group-item>
                  <div>
                    <button id="show-btn" class="modalBtn" @click="$bvModal.show('emailModal')">
                      혹시 이메일을 받지 못하셨나요?
                    </button>
                    <b-modal id="emailModal" hide-footer>
                      <template #modal-title>이메일을 받지 못하셨나요?</template>
                      <div class="d-block text-center">
                        <b-button block @click="resend">이메일 재전송하기</b-button>
                      </div>
                    </b-modal>
                  </div>
                </b-list-group-item>
              </b-card-body>
              <b-list-group flush>
                <b-list-group-item>
                  <b-button @click="$router.go(-1)">로그인 창으로 돌아가기</b-button>
                </b-list-group-item>
                <b-list-group-item>
                  <p class="findMessage">
                    아이디 찾기 기능은 고객님들의 개인정보 보호를 위해<br />
                    아이디의 일부만 보여드리는 형식으로 진행됩니다.
                  </p>
                </b-list-group-item>
              </b-list-group>
            </div>
          </b-tab>
          <b-tab title="비밀번호 찾기">
            <!-- 이메일 전송 전에 보여줄 창 -->
            <div v-show="!pwEmailSent">
              <form @submit.prevent="handleSubmit(sendEmail)">
                <b-card-body>
                  <b-card-title>비밀번호 찾기</b-card-title>
                  <p>가입하실 때 입력하신 이메일과 아이디, 성함을 입력해 주세요</p>
                  <b-input v-model="name" class="mb-1" placeholder="성함"></b-input>
                  <b-input v-model="userId" class="mb-1" placeholder="아이디"></b-input>
                  <b-input v-model="email" placeholder="이메일"></b-input>
                </b-card-body>
                <b-list-group flush>
                  <b-list-group-item>
                    <b-button @click="sendPwEmail">비밀번호 변경</b-button>
                  </b-list-group-item>
                  <b-list-group-item>
                    <p class="findMessage">
                      비밀번호 찾기 기능은 고객님들의 개인정보 보호를 위해<br />
                      이메일로 임시비밀번호를 발급해드리는 형식으로 진행됩니다.
                    </p>
                  </b-list-group-item>
                </b-list-group>
              </form>
            </div>
            <!-- 이메일 전송 후 인증 전에 보여줄 창 -->
            <div v-show="pwEmailSent">
              <b-card-body>
                <b-card-title>비밀번호 찾기</b-card-title>
                <p>
                  이메일로 임시 비밀번호가 발급되었습니다.<br />
                  로그인 후에 반드시 비밀번호를 변경해 주세요!
                </p>
              </b-card-body>
              <b-list-group flush>
                <b-list-group-item>
                  <div>
                    <button id="show-btn" class="modalBtn" @click="$bvModal.show('pwEmailModal')">
                      혹시 이메일을 받지 못하셨나요?
                    </button>
                    <b-modal id="pwEmailModal" hide-footer>
                      <template #modal-title>이메일을 받지 못하셨나요?</template>
                      <div class="d-block text-center">
                        <b-button block @click="resendPw">이메일 재전송하기</b-button>
                      </div>
                    </b-modal>
                  </div>
                </b-list-group-item>
              </b-list-group>
            </div>
          </b-tab>
        </b-tabs>
      </div>

      <b-card-body>
        <a href="/auth/login" class="card-link">로그인창으로 돌아가기</a>
      </b-card-body>

      <b-card-footer style="text-align: center"
        ><footer>2022 My_Coupon &copy; All Rights Reserved.</footer></b-card-footer
      >
      <!-- <b-card-img src="https://placekitten.com/480/210" alt="Image" bottom></b-card-img> -->
    </b-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      emailSent: false,
      pwEmailSent: false,
      name: '',
      email: '',
      userId: ''
    }
  },
  methods: {
    async sendEmail() {
      const user = {
        name: this.name,
        email: this.email
      }
      await axios
        .get(process.env.VUE_APP_URL + `/find/userId/${user.email}/${user.name}`)
        .then(async res => {
          this.emailSent = true
        })
        .catch(err => {
          alert('유저정보가 일치하지 않습니다!')
        })
    },
    async sendPwEmail() {
      const axiosBody = {
        email: this.email,
        name: this.name,
        userId: this.userId
      }
      await axios
        .post(process.env.VUE_APP_URL + '/find/password', axiosBody)
        .then(async res => {
          this.pwEmailSent = true
        })
        .catch(err => {
          alert('유저정보가 일치하지 않습니다!')
        })
    },
    resend() {
      this.sendEmail()
      this.$bvModal.hide('emailModal')
    },
    resendPw() {
      this.sendPwEmail()
      this.$bvModal.hide('pwEmailModal')
    }
  }
}
</script>

<style>
.find {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 755px;
  background-color: #f0f2f3;
}
.joinContainer {
  overflow: hidden;
  position: absolute;
  top: 55%;
  left: 50%;
  width: 550px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: #fff;
  box-sizing: border-box;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  z-index: 1;
}
.findMessage {
  font-size: 15px;
  color: grey;
}
.modalBtn {
  border: none;
  color: grey;
  background-color: white;
  text-align: center;
  justify-content: center;
}
</style>
