<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide img-src="https://i.ibb.co/5629myW/slide1.jpg"></b-carousel-slide>
      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://i.ibb.co/yBYDJ5F/slide2.jpg"></b-carousel-slide>
    </b-carousel>
    <section>
      <section id="start" class="page-section">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">My stamp</h2>
            <p class="section-subheading text-muted">카페 쿠폰, 이제는 테블릿으로 적립해요</p>
          </div>
          <div class="row text-center">
            <div class="col-md-4" style="margin-bottom: 8vh">
              <span>
                <b-iconstack font-scale="7">
                  <b-icon stacked icon="circle-fill" style="background-color: transparent"></b-icon>
                  <b-icon stacked icon="lightbulb" scale="0.5" variant="white"></b-icon>
                </b-iconstack>
              </span>
              <h4 class="my-3">Solution</h4>
              <p class="text-muted">마이 스탬프는 카페 도장 쿠폰 솔루션을<br />제공해주는 웹사이트 입니다.</p>
            </div>
            <div class="col-md-4" style="margin-bottom: 8vh">
              <span>
                <b-iconstack font-scale="7">
                  <b-icon stacked icon="circle-fill"></b-icon>
                  <b-icon stacked icon="shop" scale="0.5" variant="white"></b-icon>
                </b-iconstack>
              </span>
              <h4 class="my-3">System</h4>
              <p class="text-muted">
                카페 자체 앱을 만들기 어려운 소상공인 카페<br />점주 분들께 쉽게 사용할 수 있는 전자 스탬프<br />시스템을
                제공하여 관리가 어려운 종이 쿠폰을<br />대체할 수 있게 도와드립니다.
              </p>
            </div>
            <div class="col-md-4" style="margin-bottom: 8vh">
              <span class="fa-stack fa-4x">
                <b-iconstack font-scale="7">
                  <b-icon stacked icon="circle-fill"></b-icon>
                  <b-icon stacked icon="person-badge" scale="0.5" variant="white"></b-icon>
                </b-iconstack>
              </span>
              <h4 class="my-3">Web Services</h4>
              <p class="text-muted">자신만의 웹사이트로 간편하게 고객들의 쿠폰<br />정보를 관리할 수 있습니다.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="solution" class="page-section">
        <div class="text-center">
          <b-iconstack font-scale="5">
            <b-icon stacked icon="check"></b-icon>
          </b-iconstack>
          <h2 class="section-heading text-uppercase">지금 바로 신청하러 오세요</h2>
          <p class="section-subheading text-muted">신청이 어려우시다면 무료 가입 후 문의에 따라 빠르게 도와드립니다.</p>
        </div>
        <div class="text-center">
          <div class="col-md-12">
            <button class="SignUpB" @click="$router.push('/auth/login')">가입하기</button>
          </div>
        </div>
      </section>
      <section id="about" class="page-section">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase" style="margin-bottom: 10vh">About</h2>
            <!-- <p class="section-subheading text-muted">우리들의 개발 스토리</p> -->
          </div>
          <ul class="timeline">
            <li>
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" src="../assets/img/about/1.jpg" alt="..." />
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>2022</h4>
                  <h4 class="subheading">Our Humble Beginnings</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam
                    reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore
                    laudantium consectetur!
                  </p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" src="../assets/img/about/4.jpg" alt="..." />
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>2022-10-21</h4>
                  <h4 class="subheading">Lorem, ipsum dolor.</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam
                    reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore
                    laudantium consectetur!
                  </p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-image">
                <h4>
                  Be Part
                  <br />
                  Of Our
                  <br />
                  Story!
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <footer>
        <div class="Homefooter">
          <img class="logoImg" src="../../public/whitelogo.png" />
          <div>
            <p>서울특별시 강남구 테헤란로4길 38-5 | 마이스탬프</p>
            <p>2022 My_Stemp &copy; All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    slide: 0,
    sliding: null
  }),
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
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
.SignUpB {
  width: 22vw;
  height: 11vh;
  margin-bottom: 15vh;
  color: #fff;
  font-weight: bold;
  background-color: #5a38d4;
  border: none;
  border-radius: 10px;
  transition: 0.5s;
}
.SignUpB:hover {
  background-color: #432a9f;
}
#start {
  padding-bottom: 8vh;
}
#solution {
  background-color: #f0f2f3;
  padding-top: 2vh;
}
#about {
  margin-bottom: 10vh;
}
.text-center {
  margin-top: 11vh;
}
.timeline {
  position: relative;
  padding: 0;
  list-style: none;
}
.timeline:before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 40px;
  width: 2px;
  margin-left: -1.5px;
  content: '';
  background-color: #e9ecef;
}
.timeline > li {
  position: relative;
  min-height: 50px;
  margin-bottom: 50px;
}
.timeline > li:after,
.timeline > li:before {
  display: table;
  content: ' ';
}
.timeline > li:after {
  clear: both;
}
.timeline > li .timeline-panel {
  position: relative;
  float: right;
  width: 100%;
  padding: 0 20px 0 100px;
  text-align: left;
}
.timeline > li .timeline-panel:before {
  right: auto;
  left: -15px;
  border-right-width: 15px;
  border-left-width: 0;
}
.timeline > li .timeline-panel:after {
  right: auto;
  left: -14px;
  border-right-width: 14px;
  border-left-width: 0;
}
.timeline > li .timeline-image {
  position: absolute;
  z-index: 100;
  left: 0;
  width: 80px;
  height: 80px;
  margin-left: 0;
  text-align: center;
  color: white;
  border: 7px solid #e9ecef;
  border-radius: 100%;
  background-color: #5a38d4;
}
.timeline > li .timeline-image h4,
.timeline > li .timeline-image .h4 {
  font-size: 10px;
  line-height: 14px;
  margin-top: 12px;
}
.timeline > li.timeline-inverted > .timeline-panel {
  float: right;
  padding: 0 20px 0 100px;
  text-align: left;
}
.timeline > li.timeline-inverted > .timeline-panel:before {
  right: auto;
  left: -15px;
  border-right-width: 15px;
  border-left-width: 0;
}
.timeline > li.timeline-inverted > .timeline-panel:after {
  right: auto;
  left: -14px;
  border-right-width: 14px;
  border-left-width: 0;
}
.timeline > li:last-child {
  margin-bottom: 0;
}
.timeline .timeline-heading h4,
.timeline .timeline-heading .h4 {
  margin-top: 0;
  color: inherit;
}
.timeline .timeline-heading h4.subheading,
.timeline .timeline-heading .subheading.h4 {
  text-transform: none;
}
.timeline .timeline-body > ul,
.timeline .timeline-body > p {
  margin-bottom: 0;
}

@media (min-width: 768px) {
  .timeline:before {
    left: 50%;
  }
  .timeline > li {
    min-height: 100px;
    margin-bottom: 100px;
  }
  .timeline > li .timeline-panel {
    float: left;
    width: 41%;
    padding: 0 20px 20px 30px;
    text-align: right;
  }
  .timeline > li .timeline-image {
    left: 50%;
    width: 100px;
    height: 100px;
    margin-left: -50px;
  }
  .timeline > li .timeline-image h4,
  .timeline > li .timeline-image .h4 {
    font-size: 13px;
    line-height: 18px;
    margin-top: 16px;
  }
  .timeline > li.timeline-inverted > .timeline-panel {
    float: right;
    padding: 0 30px 20px 20px;
    text-align: left;
  }
}
@media (min-width: 992px) {
  .timeline > li {
    min-height: 150px;
  }
  .timeline > li .timeline-panel {
    padding: 0 20px 20px;
  }
  .timeline > li .timeline-image {
    width: 150px;
    height: 150px;
    margin-left: -75px;
  }
  .timeline > li .timeline-image h4,
  .timeline > li .timeline-image .h4 {
    font-size: 18px;
    line-height: 26px;
    margin-top: 30px;
  }
  .timeline > li.timeline-inverted > .timeline-panel {
    padding: 0 20px 20px;
  }
}
@media (min-width: 1200px) {
  .timeline > li {
    min-height: 170px;
  }
  .timeline > li .timeline-panel {
    padding: 0 20px 20px 100px;
  }
  .timeline > li .timeline-image {
    width: 170px;
    height: 170px;
    margin-left: -85px;
  }
  .timeline > li .timeline-image h4,
  .timeline > li .timeline-image .h4 {
    margin-top: 40px;
  }
  .timeline > li.timeline-inverted > .timeline-panel {
    padding: 0 100px 20px 20px;
  }
}
</style>
