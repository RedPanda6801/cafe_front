<template>
  <div>
    <div class="jobWrap">
      <div class="jobImage">
        <img src="../../public/introduce.png" />
      </div>
      <div class="jobText">
        <p>개발 크루 소개</p>
      </div>
    </div>
    <section id="start" class="page-section">
      <div class="container">
        <br />
        <br />
        <div class="text-center">
          <h4>동료에 대한 무한한 신뢰를 통해 최고의 서비스를 제공하겠습니다.</h4>
        </div>
        <br />
        <br />
        <div class="row text-center">
          <div class="col-md-3" style="margin-bottom: 8vh">
            <img src="../../public/Jimin.jpg" />

            <h4 class="my-3">지민</h4>
            <p class="text-muted"># 프론트엔드_개발자<br /># my_첫_프론트<br /># ENTP</p>
          </div>
          <div class="col-md-3" style="margin-bottom: 8vh">
            <img src="../../public/Seunggyu.jpg" />
            <h4 class="my-3">승규</h4>
            <p class="text-muted"># 백엔드_개발자<br />#서버는_문제가_없습니다.<br /># ISFJ</p>
          </div>
          <div class="col-md-3" style="margin-bottom: 8vh">
            <img src="../../public/Jooha.jpg" />
            <h4 class="my-3">주하</h4>
            <p class="text-muted"># 프론트엔드_개발자<br /># 프로젝트_화이팅<br /># ISTJ</p>
          </div>
          <div class="col-md-3" style="margin-bottom: 8vh">
            <img src="../../public/Taehwan.jpg" />
            <h4 class="my-3">태환</h4>
            <p class="text-muted"># 백엔드_개발자<br /># 내_마음도_몰라주는_코드는_바보<br /># INTJ</p>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div class="homeFooter">
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
export default {}
</script>

<style>
.homeFooter {
  font-size: 12px;
  color: #fff;
  background: #5a38d4;
  letter-spacing: 2px;
  text-align: center;
  padding: 3vh 5vw;
}
.jobWrap {
  width: 100%;
  margin: 10px auto;
  position: relative;
}
.jobWrap img {
  width: 100%;
  height: 55vh;
  object-fit: cover;
  filter: brightness(60%);
}
.jobText {
  position: absolute;
  top: 47%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  font-size: 3vw;
  font-weight: bold;
  text-align: center;
  color: #fff;
}
</style>
