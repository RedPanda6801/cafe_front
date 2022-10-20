<template>
  <div>
    <div class="faqContainer">
      <div class="job-wrap">
        <div class="job-image">
          <img src="../../public/job.jpg" />
          <div class="job-text">
            <p>자주묻는 질문과 답변</p>
            <span>FAQ</span>
          </div>
        </div>
        <div class="faqList">
          <div v-for="(list, i) in faqList" :key="list" :faqList="faqList[i]" class="faq">
            <div class="faqHeading">
              <p class="category">{{ faqList[i].category }}</p>
              <p class="title">{{ faqList[i].title }}</p>
            </div>
            <div class="faqBody">
              <p>{{ faqList[i].comment }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div class="Homefooter">
        <img class="logoImg" src="../../public/whitelogo.png" style="margin-top: 20px" />
        <div style="margin: 20px">
          <p>서울특별시 강남구 테헤란로4길 38-5 | 마이스탬프 | my_stamp@naver.com</p>
          <p>2022 My_Stamp &copy; All Rights Reserved.</p>
          <b-icon icon="instagram" scale="2" variant="white" style="margin-right: 20px"></b-icon>
          <b-icon icon="github" scale="2" variant="white"></b-icon>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import FAQ from '@/assets/FAQ.js'

export default {
  data() {
    return {
      faqList: FAQ
    }
  }
}
</script>

<style>
.job-wrap {
  width: 100%;
  margin: 10px auto;
  position: relative;
}
.job-wrap img {
  width: 100%;
  height: 55vh;
  object-fit: cover;
  filter: brightness(60%);
}
.job-text {
  position: absolute;
  top: 47%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, 50%);
  font-size: 3vw;
  font-weight: bold;
  text-align: center;
  color: #fff;
}
.faqContainer {
  display: grid;
  grid-template-rows: 10% 90%;
}
.faqList {
  margin: 50px;
}
.faqHeading {
  display: grid;
  grid-template-columns: 15% 85%;

  border-bottom: solid 1px PURPLE;

  font-size: 15px;
  margin-top: 5px;
  margin-left: 20px;
}
.faqBody {
  font-size: 18px;
  color: #060218;
  border-bottom: solid 1px PURPLE;
  margin-left: 20px;
}
.faq {
  display: grid;
  grid-template-rows: 30% 70%;
  width: 80%;
}
.category {
  color: #432a9f;
  font-weight: bold;
}
.title {
  color: #110a2b;
  font-weight: bold;
}
.Homefooter {
  font-size: 12px;
  color: #fff;
  background: #5a38d4;
  letter-spacing: 2px;
  text-align: center;
  padding: 3vh 5vw;
}
</style>
