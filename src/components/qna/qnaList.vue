<template>
  <div class="QNAhomeList" @click="qnaRoute(qnaList.id)">
    <div class="QNAList">
      <span v-if="!qnaList.SolutionId" class="QNAName">답변없음</span>
      <span v-if="qnaList.SolutionId" class="QNPName">답변완료</span>
      <span class="QNAtitle">{{ qnaList.title }}</span>
      <span class="QNAcategory">{{ qnaList.category }}</span>
      <span class="QNATime">{{ setFormat(qnaList.createdAt) }}</span>
      <button class="QNAIcon" @click="deleteQna"><b-icon icon="trash"></b-icon></button>
    </div>
  </div>
</template>

<script>
import SetFormat from '../../assets/mixins/SetFormat.vue'
import axios from 'axios'
export default {
  mixins: [SetFormat],
  props: {
    qnaList: {
      type: Object,
      required: true
    }
  },
  methods: {
    qnaRoute(questionId) {
      this.$router.push(`/qna/${questionId}`)
    },
    async deleteQna() {
      // console.log(this.watchCafe.cafeName)
      await axios
        .delete(process.env.VUE_APP_URL + `/question/delete-question/${this.qnaList.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then(response => {
          console.log('deleteQna - response : ', response)
          alert('질문이 삭제 되었습니다.')
          this.$router.push('/qna')
        })
        .catch(error => {
          console.log('deleteQna - error : ', error)
        })
    }
  }
}
</script>

<style>
.QNAhomeList {
  cursor: pointer;
  margin-bottom: 15px;
}
.QNAList {
  width: 95%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border-radius: 30px;
  transition: 0.5s;
  box-shadow: 2px 2px 2px 1px rgba(1, 1, 1, 0.1);
}
.QNAList:hover {
  background-color: rgba(232, 232, 232, 0.47);
}
.QNAName {
  margin-top: 5px;
  width: 10vw;
  text-align: center;
  font-weight: bold;
}
.QNPName {
  margin-top: 5px;
  width: 10vw;
  text-align: center;
  font-weight: bold;
}
.QNAtitle {
  margin-top: 5px;
  width: 35vw;
  text-align: center;
  font-weight: bold;
}
.QNAcategory {
  margin-top: 5px;
  width: 20vw;
  text-align: center;
}
.QNATime {
  margin-top: 5px;
  width: 15vw;
  text-align: center;
  color: #432a9f;
  border-radius: 15px;
}
.QNAIcon {
  margin-top: 3px;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 15px;
}
</style>
