<template>
  <div>
    <div class="job-wrap">
      <div class="job-image">
        <img src="../../public/introduce.png" />
      </div>
      <div class="job-text">
        <p>개발 크루 소개</p>
      </div>
    </div>
    <section id="start" class="page-section">
      <div class="container">
        <br />
        <div class="text-center">
          <h4>동료에 대한 무한한 신뢰를 통해 최고의 서비스를 제공하겠습니다.</h4>
        </div>
        <br />
        <br />
        <div class="row text-center">
          <div class="col-md-3" style="margin-bottom: 8vh">
            <span>
              <b-iconstack font-scale="7">
                <b-icon stacked icon="circle-fill"></b-icon>
                <b-icon stacked icon="person-badge" scale="0.5" variant="white"></b-icon>
              </b-iconstack>
            </span>
            <h4 class="my-3">Jimin</h4>
            <p class="text-muted">#프론트엔드 개발자<br />#<br /># ENTP</p>
          </div>
          <div class="col-md-3" style="margin-bottom: 8vh">
            <span>
              <b-iconstack font-scale="7">
                <b-icon stacked icon="circle-fill"></b-icon>
                <b-icon stacked icon="person-badge" scale="0.5" variant="white"></b-icon>
              </b-iconstack>
            </span>
            <h4 class="my-3">Seung Gyu</h4>
            <p class="text-muted">#백엔드 개발자<br />#<br /># ISFJ</p>
          </div>
          <div class="col-md-3" style="margin-bottom: 8vh">
            <span class="fa-stack fa-4x">
              <b-iconstack font-scale="7">
                <b-icon stacked icon="circle-fill"></b-icon>
                <b-icon stacked icon="person-badge" scale="0.5" variant="white"></b-icon>
              </b-iconstack>
            </span>
            <h4 class="my-3">Joo Ha</h4>
            <p class="text-muted">#프론트엔드 개발자<br />#<br /># ISTJ</p>
          </div>
          <div class="col-md-3" style="margin-bottom: 8vh">
            <span class="fa-stack fa-4x">
              <b-iconstack font-scale="7">
                <b-icon stacked icon="circle-fill"></b-icon>
                <b-icon stacked icon="person-badge" scale="0.5" variant="white"></b-icon>
              </b-iconstack>
            </span>
            <h4 class="my-3">Tae Hwan</h4>
            <p class="text-muted">#백엔드 개발자<br />#<br /># INTJ</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
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
  transform: translate(-50%, -50%);
  font-size: 3vw;
  font-weight: bold;
  text-align: center;
  color: #fff;
}
</style>
