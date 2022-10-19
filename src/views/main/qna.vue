<template>
  <div class="qnaContainer">
    <div class="qna">
      <h3><b-icon icon="chat-left-text" scale="0.9"></b-icon> Contact</h3>
      <div class="btnOrganizer">
        <button class="qnaBtn" @click="$router.push('/qna/write')">
          <span class="Btext"><b-icon icon="plus-lg" scale="0.7"></b-icon> 문의글 남기기</span>
        </button>
      </div>
      <div v-show="!qnaList" class="qnaNone">
        <div class="iconHolder">
          <b-icon icon="exclamation-circle" class="qnaNoneIcon"></b-icon>
        </div>
        <span class="mt-4"><p>작성하신 문의내역이 없습니다.</p></span>
      </div>
      <!-- v-for로 질문 갯수만큼 반복 -->
      <div v-show="qnaList" class="qnaList">
        <qnaList v-for="qnaList in qnaLists" :key="qnaList.id" :qna-list="qnaList" />
      </div>
    </div>
  </div>
</template>

<script>
import qnaList from '../../components/qna/qnaList.vue'
import axios from 'axios'
export default {
  components: {
    qnaList
  },
  data() {
    return {
      qnaList: true,
      qnaLists: []
    }
  },
  mounted() {
    this.getqnaLists()
  },
  methods: {
    async getqnaLists() {
      await axios
        .get(process.env.VUE_APP_URL + '/question/info', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then(async res => {
          this.qnaLists = res.data.data
          console.log('qnaLists : ', res.data.data)
        })
        .catch(err => {
          console.log('qnaLists -error : ', err)
        })
    }
  }
}
</script>

<style>
.qnaContainer {
  width: 100%;
  height: 100%;
}
.btnOrganizer {
  display: flex;
  justify-content: flex-end;
  width: 95%;
}
.qnaNone {
  align-items: center;
  color: grey;
  display: grid;
  grid-template-rows: 80% 20%;
  justify-content: center;
  font-size: 30px;
  margin-top: 50px;
}
.iconHolder {
  display: grid;
  justify-items: center;
}
.qnaNoneIcon {
  width: 250px;
  height: 250px;
  color: #eee;
}
/* .qnaList {
  display: grid;
  grid-template-columns: 15% 15% 50% 20%;
} */
.qna {
  width: 100%;
  height: 100vh;
  padding: 25px;
}
.qnaBtn {
  width: 180px;
  height: 50px;
  margin: 5px 0px 30px 0px;
  border: none;
  font-size: 18px;
  color: grey;
  border-radius: 20px;
  transition: 0.5s;
}
.qnaBtn:hover {
  filter: brightness(90%);
}
</style>
