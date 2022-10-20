<template>
  <div>
    <div class="job-wrap">
      <div class="job-image">
        <img src="../../public/convention.jpg" />
      </div>
      <div class="job-text">
        <p>협약 기업</p>
      </div>
    </div>
    <section id="start" class="page-section">
      <div class="container">
        <br />
        <div class="text-center">
          <h4>100 여 개의 우수한 기업이 My Stamp에 투자를 하였습니다.</h4>
        </div>
        <br />
        <br />
        <div class="row text-center">
          <div class="col-md-3" style="margin-bottom: 8vh">
            <span>
              <img rounded src="../../public/UVC.png" />
            </span>
            <h4 class="my-3">UVC</h4>
          </div>
          <div class="col-md-3" style="margin-bottom: 8vh">
            <span>
              <img rounded src="../../public/SAMSUNG.png" />
            </span>
            <h4 class="my-3">SAMSUNG</h4>
          </div>
          <div class="col-md-3" style="margin-bottom: 8vh">
            <span>
              <img rounded src="../../public/APPLE.png" />
            </span>
            <h4 class="my-3">APPLE</h4>
          </div>
          <div class="col-md-3" style="margin-bottom: 8vh">
            <span>
              <img rounded src="../../public/Microsoft.png" />
            </span>
            <h4 class="my-3">Microsoft</h4>
          </div>
          <div class="col-md-3" style="margin-bottom: 8vh">
            <span>
              <img rounded src="../../public/AWS.png" />
            </span>
            <h4 class="my-3">AWS</h4>
          </div>
          <div class="col-md-3" style="margin-bottom: 8vh">
            <span>
              <img rounded src="../../public/STARBUCKS.png" />
            </span>
            <h4 class="my-3">STARBUCKS</h4>
          </div>
          <div class="col-md-3" style="margin-bottom: 8vh">
            <span>
              <img rounded src="../../public/McDonald.png" />
            </span>
            <h4 class="my-3">McDonald</h4>
          </div>
          <div class="col-md-3" style="margin-bottom: 8vh">
            <span>
              <img rounded src="../../public/BaeMin.png" />
            </span>
            <h4 class="my-3">배달의 민족</h4>
          </div>
        </div>
      </div>
    </section>
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
export default {}
</script>

<style>
.Homefooter {
  font-size: 12px;
  color: #fff;
  background: #5a38d4;
  letter-spacing: 2px;
  text-align: center;
  padding: 3vh 5vw;
}
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
  font-family: 'S-CoreDream-3Light';
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
body {
  font-family: 'S-CoreDream-3Light' !important;
}
</style>
