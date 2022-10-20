<template>
  <div class="QNAhome">
    <h3 class="qnaHome"><b-icon icon="list-check" scale="0.9"></b-icon> Contact Page</h3>
    <b-card class="QNAP">
      <div>
        <p>제목: {{ title }}</p>
      </div>
      <div>
        <p>카테고리: {{ category }}</p>
      </div>
      <div>
        <p>작성일자: {{ setRealFormat(createdAt) }}</p>
      </div>
      <div>
        <p>내용: {{ text }}</p>
      </div>
      <div class="LINE"></div>
      <div>
        <div v-if="Watchqna.solution" class="AddList">
          <b-row class="spacer" no-gutters>
            <b-col cols="4" sm="2" md="1">
              <div class="AddChannelProfile">
                <b-avatar>
                  <b-icon icon="person-circle" scale="1.5"></b-icon>
                </b-avatar>
              </div>
            </b-col>
            <div class="commentchuga">
              <span class="comName">매니저</span>
              <span class="comTime">{{ setRealFormat(Watchqna.solution.createdAt) }}</span>
              <p class="comText">{{ Watchqna.solution.comment }}</p>
            </div>
          </b-row>
        </div>
      </div>
    </b-card>
    <b-card v-if="!Watchqna.solution && Watchqna.isManager" class="QQQ">
      <div class="ROOT">
        <b-form-textarea id="textarea" v-model="comment" placeholder="댓글달기" rows="3" max-rows="6"></b-form-textarea>
        <b-btn @click="AddQUest">입력</b-btn>
      </div>
    </b-card>
    <!-- <b-card class="Solution-an"></b-card> -->
  </div>
</template>

<script>
import axios from 'axios'
import SetFormat from '../../assets/mixins/SetFormat.vue'
export default {
  mixins: [SetFormat],
  data() {
    return {
      Watchqna: {},
      comment: '',
      title: '',
      category: '',
      Comment: {},
      createdAt: '',
      text: ''
    }
  },
  mounted() {
    this.getWatchqna()
    this.getComment()
  },
  methods: {
    async getWatchqna() {
      await axios
        .get(process.env.VUE_APP_URL + `/question/info-one/${this.$route.params.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then(response => {
          console.log('getWatchqna - response : ', response.data.data)
          this.Watchqna = response.data.data
          this.title = this.Watchqna.question.title
          this.category = this.Watchqna.question.category
          this.createdAt = this.Watchqna.question.createdAt
          this.text = this.Watchqna.question.text
        })
        .catch(error => {
          console.log('getWatchqna - error : ', error)
        })
    },
    async getComment() {
      if (this.Watchqna.isManager) {
        await axios
          .get(process.env.VUE_APP_URL + `/solution/info/`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          })
          .then(response => {
            console.log('getComment - response : ', response.data.data)
            this.WatchCom = response.data.data
          })
          .catch(error => {
            console.log('getComment - error : ', error)
          })
      }
    },
    async AddQUest() {
      const axioBody = {
        comment: this.comment
      }
      await axios
        .post(process.env.VUE_APP_URL + `/solution/add-solution/${this.Watchqna.question.id}`, axioBody, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then(async res => {
          console.log('AddQUest - res : ', res.data.data)
          // this.$router.push('/main')
          alert('댓글이 추가 되었습니다.')
          this.$router.go()
        })
        .catch(err => {
          alert('다시 시도해주세요!')
          console.log('AddQUest - error: ', err)
        })
    }
  }
}
</script>

<style>
.comName {
  font-weight: bold;
}
.comTime {
  margin-left: 5px;
  font-size: 12px;
  color: rgb(116, 116, 116);
}
.comText {
  margin-top: 5px;
  margin-bottom: 8px;
}
.AddList {
  margin-top: 20px;
}
.QNAhome {
  width: 100%;
  height: 100vh;
  padding: 25px;
}
.QNAP {
  width: 70%;
  height: 75vh;
  padding: 25px;
  margin-top: 20px;
  margin-left: 12vw;
  border: none;
  border-radius: 15px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);
}
.QQQ {
  width: 70%;
  height: 30vh;
  padding: 25px;
  margin-top: 20px;
  margin-left: 12vw;
  border: none;
  border-radius: 15px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);
}
.Solution-an {
  width: 70%;
  height: 75vh;
  padding: 25px;
  margin-top: 20px;
  margin-left: 12vw;
  border: none;
  border-radius: 15px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);
}
.ROOT {
  z-index: 2;
}
.LINE {
  border-bottom: 1px solid black;
}
</style>
