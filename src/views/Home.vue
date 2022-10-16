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
      <b-carousel-slide
        img-src="https://lh3.googleusercontent.com/fife/AAbDypAR7AP2y8LCGUFqJPpxVGrYWdxjEcgQOalYN9YtsMSaK4dMk8ARhX_HP4jg-Bk4-_vCRBvFMXP6oxUkyOYdAsBL7TgKeh0_mByZENFlc0pwME9DziP4gkAu2d9nBOlvVcSO6cM0LiARoLGsmtTaFUyKpVdmX-1s8XmKmjxVtFx2lHkEovU9TqJPzEov5zDPhI3NslZJXbg4EM39LBHS2KoiNz7dbfM9lTVN4EId-mberZRAbW7izZ8v508ovm5Vz7JgtqOmlgxavptExz0X50_FNSnN6JYqU0AGxbh5T4GxVtfB2gI2B-EbEekdSlCa13lKfe0Vlb0Nuh81LoLzOzX9z-e-Lv-bANfAn2cwmDpIyl6viXIH47X5hwai4ELDRB4pLfIhQViPmoeIY0moOrNYXgDJcid5o5C5jLgFL6N_1dCTlUKREH-Jky3tNyiqMXi9Gujwp5IlHksu4aWCjdKgXwPb5t2HjzxzuWEBaf-PHbMmFmE_tl6YGxGm4d6mxmKQa3wCK9W1rph2c1bqQP-oBAddKgRKktyK-i4isB07wDwDqGUgayan6L3Oo8bQ_DYR-ukJqQYl4RlJG1hlMPKLUqQrT04a7yvWwhbfWltSOQrAH2Zb0wFy31XaexVbh9yUy9CS_S2c7czNHV7QEegmH83Y3ofD5XJ4iYy3JNTuVlttKsAwowmnYaMMXf5Gm2d2JP1icYIC4U1AmCW2Mvfqir2mKkrxJRlFWSNPWMqEO8gUiUm0yIUtGJKYfEJSSzbe4R1W8FqEiSa_HN8EW4j01qOE7nohSBO14HWnokyEmFoNzbEJqSRfOfPhmWutPs7qdeVF35VqC1GkqMN-gwU5NilSckR1py6WUNU-B9X_RQQ0sTNTGB82mcpfemUHSEUxe5Hzo6JibhlFGVY3LVIgbMcWw-kNeVfoSZx_6bDVpRrPEL73-5q_M_ECXMhx3e-10U7KyzjEjpUuOVOuwf1SECcLr6C3VWpai_GX8-5xdVUIFOAdSfr2Hto5XowSWvDa96FbnWXaulgMVsonIr4Trpk4EholP-VbX_hz6mf7hEzCd6Kk0xXoCwJxktq1rJCffAUGSMKWWyDNyFRwCL358qYaCT7hoLy4l0QKNcOThPVmoT3hvS7FsN7O-KbhPmGtM9pz0kx7dGC3MMHajveQQqj8W6fzi7JPLkSdLBUKtfsDWiuJK9TU1EZ-vBBLVA3iRZ0HeepI5Qw3eDq0MvNCG8tcqMu9hihUpZ0uchWZJXNl41ZTDRdS6NU6x69i7HuM4R7XgKYiMi4eEUe0mWZAP4IiZRDQEJ_gy3hXkjAu1Ucex2NcuHsY-mzoRSIBpKq5i_hjClDjx161710ZAKMI0pu-S4IVNCNB3UFWW4UHkXkTQ7Xs-FRrgW78S2tNte1bVPj8KWMGDFoW0MyvbAO7uwFEYLUPV19Hu2zVseh4YJjsD8JNVdkJ1xWJ7zXI-yxKnKfP1pGPTHALc0MmZGuiXaGr1Z0W7k57Ybb-CD7rUpee=w1920-h942"
      ></b-carousel-slide>
      <!-- Slides with custom text -->
      <b-carousel-slide
        img-src="https://lh3.googleusercontent.com/fife/AAbDypBsjHzsi9oX9Z3Nd-42X7-_NrC_nqffoKdbvarGLxGIGz4Xv084uGkmTMXkBYqPxRqT00PHDaKL8Cbwi44opBBL1a0HMyXWxnNW7gAaJnSEOXbW6D3gDCBNYh2ju5zNmtGIyrW06am8rhWJDvFZlC9W-tmGwwYHq7DmebSSxDEsXoLdpzvW5jVqJV_vCX5ZXF0J0H4Fbw8SbSj1aDkn9KPn42viuJ2z1i2W9PAdFABqDw07F6wYe4ca_dAxutZdvn1NXawgWoryGhxpnwTVsTXvoUNXyvF6w-ryeFkrGEW2acM_O9ydxo4jEMpBScoF81Q-wswSg58pxWixAvFFDjc8oH-ulf2Z3Ix2W-twKkz5ZU48c0w2avwWHsaXpVmS5VwZoYEJNKNoQuHZ4ditHONpp0Z8OVYU0QNOm2nWr8qs5M9hv-4bbzR_SUbtJKjUAcbn77clnhuuvla97AZXQLOIvIm5h6ZcQrrjWtUkR7c25y3sp9ponGsVOPtzKsBXj9WgPqENTsnSfmLWWnguOHNEuopr_QrjoImv5kXRaxcYApm8f6vouFH6nwKMie4RSp4jFGs_spK_zPXKGKTTjx3YenzSKHZc7xhS8pdcFaT2CqqX0VQaumSbbAbrUDdtZl1rJhNs_V61x31XeIkO_UBUrLhHWnK6M30HjMn1b48mPnqlS3g6jJzQmoZt56KLDQcgev6BuuQkBXZkgZlWInID2exjvg-C_S7JT4BAELOJEEnVAPkj_fUWidKT4J2uWKeOkvtuMd3uL6TUgkP465qUwy_EZvjX8acGGcXKiCYczjaNrRYgLBCtiUmgS_dmtxEOHMZpTm1jtmBfCdOZljxHrVnO6K0xWVNV4BVQINVqlT2HJbKB2hNw39x9krxbBNjsSpGP1oGlzvNR9voxpnvOAjN2nKQX2hhdHj0FekYG0oJihLljxldujPWz2t-nCmXOM2L779ceuwYq_e-pH86F93P-ziTNSqlfBz-gUlpscxShuTqHbSnSoJesRxuR-GritTnM2-OUuggFl845maBMXxM20P3jwXESEmdPfkenB9qPYFpZ9ctF7o6kWjiWVmwVEYdnckZpWUGgbsYaMI20uFTRGv0xQR55_V4utYoYYPehp_D4sjDM86NvVst0nDnyUf7YNR2SBhReaHCP8FKMMjteJGTDym5_Fj8J_8QPUopEiv4pxSXTeko5Wm14-5cUyRvYzM2PfSO4d_7V71H9Xfinea7kAtaeLxtVrf7hvXu1QWleNnR69Rrz6bAliJGe7C5r2aDMdf_lUbQDqjaxzmV7G5dwWynilDsJt_fpLOL-y2KM5-3ioZuXt0qzbv6QKTnxvBjzSvXfe3MNA4s4fc7TKw8vsnvzQiaVA-cDZvDNdCe-HoSmfjJxxP4McqQz-diiIh-bGdVgxjpAlQ1vYnUmUzMLOzceOc4tsvm00qfA64qFNh_ucv-kjzmBperKHD3HiRIZqfUB5YUsiQ_Rz0dN57xw1O7o_tj7v5XJ-yNT=w1920-h942"
      ></b-carousel-slide>
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
