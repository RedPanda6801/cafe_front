<template>
  <div class="qnaContainer">
    <Sidemenu />
    <div class="qna">
      <h3>문의 작성하기</h3>
    </div>
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
  },
  methods: {
    qnaWrite() {
      return this.$router.push('/qna/write')
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
