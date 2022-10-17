<template>
  <div class="qnaContainer">
    <Sidemenu />
    <div class="qna">
      <h3>문의하기</h3>
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
        <div><p>답변여부</p></div>
        <div><p>카테고리</p></div>
        <div><p>제목</p></div>
        <div><p>문의날짜</p></div>
      </div>
    </div>
    <div class="footer">2022 My_Coupon &copy; All Rights Reserved.</div>
  </div>
</template>

<script>
import Sidemenu from '../main/Sidemenu.vue'
export default {
  components: {
    Sidemenu
  },
  data() {
    return {
      qnaList: false
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
  width: 90%;
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
.qnaList {
  display: grid;
  grid-template-columns: 15% 15% 50% 20%;
}
.qna {
  width: 82vw;
  height: 700px;
  padding: 25px;
  /* background-color: aqua; */
}
.qnaBtn {
  width: 180px;
  height: 50px;
  margin: 5px 0px 30px 0px;
  border: none;
  font-size: 18px;
  color: grey;
  border-radius: 20px;
}
.qnaBtn:hover {
  filter: brightness(70%);
}
.footer {
  font-size: 12px;
  color: #fff;
  background: #708ab8;
  letter-spacing: 2px;
  text-align: center;
  padding: 3vh 5vw;
}
</style>
