<template>
  <div>
    <div class="qnaW">
      <h3><b-icon icon="pencil-square" scale="0.9"></b-icon> Write</h3>
      <b-card class="mpc">
        <div class="selee">
          <b-form-select v-model="selected" :options="options"></b-form-select>
        </div>
        <div>
          <input v-model="title" class="Titlel" type="text" placeholder="제목을 입력하세요" />
        </div>
        <textarea v-model="text" class="texts" type="text" />
        <div class="textBBB">
          <b-btn class="textsA" @click="$router.go(-1)">취소</b-btn>
          <b-btn class="textsB" @click="AddContact">문의하기</b-btn>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: '카테고리를 선택하세요.', disabled: true },
        { value: '가입 / 인증', text: '가입 / 인증' },
        { value: '로그인 / 정보', text: '로그인 / 정보' },
        { value: '결제 문의', text: '결제 문의' },
        { value: '결제 수단', text: '결제 수단' },
        { value: '프로모션 / 이벤트', text: '프로모션 / 이벤트' },
        { value: '웹 이용 문의', text: '웹 이용 문의' },
        { value: '기타', text: '기타' }
      ],
      title: '',
      text: ''
    }
  },
  methods: {
    async AddContact() {
      const axiosBody = {
        category: this.selected,
        title: this.title,
        text: this.text
      }
      await axios
        .post(process.env.VUE_APP_URL + '/question/add-question', axiosBody, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then(async res => {
          console.log('AddContact - res: ', res.data)
          alert('문의가 등록 되었습니다.')
          this.$router.push('/qna')
        })
        .catch(err => {
          alert('다시 시도해주세요!')
          console.log('AddContact - error: ', err)
        })
    }
  }
}
</script>

<style>
.mpc {
  padding: 25px;
  margin-top: 20px;
  border: none;
  border-radius: 15px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);
}
.qnaW {
  width: 100%;
  height: 100vh;
  padding: 25px;
  /* background-color: aqua; */
}
.texts {
  width: 100%;
  height: 50vh;
}
.textBBB {
  display: flex;
  justify-content: right;
}
.textsA {
  margin-right: 10px;
  margin-top: 10px;
}
.textsB {
  margin-top: 10px;
}
.footer {
  font-size: 12px;
  color: #fff;
  background: #708ab8;
  letter-spacing: 2px;
  text-align: center;
  padding: 3vh 5vw;
}
.Titlel {
  width: 100%;
}
.selee {
  width: 20vw;
}
</style>
