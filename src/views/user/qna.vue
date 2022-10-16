<template>
  <div class="qnaContainer">
    <Sidemenu />
    <div class="qnaHeader">
      <!-- 제목 -->
      <p>내 문의사항</p>
    </div>
    <div class="qnaList">
      <!-- 문의글 작성 / 조회 파트 -->
      <div class="qnaBtn">
        <!-- 문의글 작성 버튼 -->
        <button>문의글 작성하기</button>
      </div>
      <div>
        <!-- v-show 이용해서 문의글 작성된 게 없다면 작성된 문의글이 없습니다 문구만 보여주기 -->
        <!-- 작성된 내 작성글 모아볼 수 있게 리스트 출력 -->
        <!-- 작성 문의글 제목 누르면 상세페이지로 이동할 수 있게 -->
      </div>
    </div>
  </div>
</template>

<script>
import Sidemenu from '../main/Sidemenu.vue'
export default {
  components: {
    Sidemenu
  }
}
</script>

<style scoped>
.qnaContainer {
  display: grid;
  grid-template-rows: 20% 80%;
  height: 95%;
  width: 95%;
  justify-content: center;
  /* align-items: center; */
}
.qnaHeader {
  font-size: 30px;
  margin-top: 30px;
  display: center;
  justify-content: center;
  width: 100%;
}
.qnaList {
  display: grid;
  grid-template-rows: 10% 90%;
  height: 100%;
  width: 100%;
}
.qnaBtn {
  display: grid;
}
</style>
