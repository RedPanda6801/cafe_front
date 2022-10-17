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
        img-src="https://lh3.googleusercontent.com/fife/AAbDypBxbdWrGhVyJ4zzsZXy9UEYV9vlUaQxWSV7RPV8uXSUD6CuxXxcgpFt-5TBmX05j5aNP0CvrX4jVJCJW93ftjzStiFBrMTIIS9nrVQNqbBaMMe0Z7vnIZj18aWbjyyyhN5a-1zrIelNWYcVIE3SpNQy57FmYxQdd_08UrBMS_lP9sEjqXKAa3713Es77GNXBNL_s7dSKkd9EUVD8GiBZi5oFRXqGghiccF_st7ds4lrRgQUc-cvMjEQp1fTgdi4gsdJ1z9T1rsfcdAgePTy1GrSVbdGvcpu85EO45-jHbjwW7Xg1zz8t9MRseypQwmaqYStxb0d6tqi3RGPV_5GYLDArYDOzSLTUJsBsM1YgGfKDEm2xCnKK2E37CWDuhU-rE_vtyu5IjeYHz9eoVLnC-cbVB5DJwYKn0x7u6XKUWexp0OELs39KzMpmS6ttdvbCE22N5hMeOoI91uuRryPSEu-lcOLSmh_kUXsvj0bLVpRIiAQwVH98QIHzx_SVHT4x8dyRpHtQey50dGZoBCyRvpXH7OWhA2BYGO-DAvQGdSwfEwOTX_JirwGtjJEiLHzjB-97MVr6-5i3d_WW2QPs4QkDZTDnQP0Rllm3ltu8eOAkPqIL1HhArrZKKtaAT6IQNJIZ9BFKzruOyjGhHhwD_g9oRPtDh4eK-Yp8ju1dIC9Prw0lnPRyMNYTtwN4Skmr67RqBAWX7zbWMSasN9srrBagZvimrMiBHsiR1quO1bTrFMj5E4e4xjUMX6h8RbzHTiVmDQbwH8g_BVVssTeZtUTbHk2R0t3b1iu6bsV-YgnMPEZa7FYmo1ol5-7z9DAqeDlf_I6abtKul3xayQK_6MCrOf3I4GduMX5Cn7K2yTfK5iHiRByroq678ZDl76kiovwbzGhixWex442DlPY612V0iFXC89AFSG-zwVYyWBapcKwpuyluL5dZwC7f0JjmEXEp-6ZpHLr9vIMkFAz1IytvVV21Rs0NdESH7T1TudLf8vGCxiAHp0AKMmPnaIkliqrI8_UsOogQgG9PjAlJONtLVJ1NnAKgXN19fqQEE_XXQNENjMGDFeETlaLOnpMvcf65gVjP2m2YwMacY59XDcPZCba5Qp6Mfr06sFrt3jMZE7AbPThgkMQH0hEiOosVPUMDwe4tc6CLQtewTyxJhtwe4tV9RYafABpAnJgyzlcdtBaigIC-FQkJoM1qgya4l1POF7nI0DoJKrav9eVh7sBMj9yYYwqpG79M-9KuBWDT9ruB2tmn-Tjb5dJl4L_tFTTwGhsCG7i8TqG6uUjXHsJ3Dr4oatC7o93Tg8pN7L53-auzK0Yj1dXMbAVVRh-3D_l0Cah3co8zmflC2J6c1lLrC0yG_a-BEcd6eRzkvDRoEmJcX-wXmKcUqFuMXwoxGmCx7c99Ns8d8qdjGPzZ1CaSMO5YHDwmOck0w5l6sGC1fArfkZ5OylHU9zN3tpbBhVVN7da-Q=w1920-h942"
      ></b-carousel-slide>
      <!-- Slides with custom text -->
      <b-carousel-slide
        img-src="https://lh3.googleusercontent.com/fife/AAbDypBAAF3AqczIpVblDva80rh-Tw4FqZJf4CHHcYIkch3pkaq6Gx2ndceyaWqM6VV1Fuku6MXvLotVyoYdPUvJFYPagcPKwnVCef7386krfeRq9scmQpnNDU3MftPaapIC7mHFNKC33sDU7jL_NtJSHiZPu7AKy3I6eN9jmmCCUpk2MVHySYaDvGdWhksC32_O4KgnT-PX8vrKTVi_9g7ihqSaqnn9VvYB7E_zYtBiLu_rEzF8-By5ABSCj84pAWcnGIqT4fmy1zuOeychzxstvSpn-SFkqtcyeAwmJqWgsew-dGg6CPo5AGSn7IMFDJMHIEY4Ahe48mKe3SEc0RBObALm5C8O9H68obfdTsH3C0sp1G_Yi5r-AFum6f4Tidcc0b5vai9WIm2zWMlT9bWpb_oBh89iD1dRlc8AIEGNG1IfWPhGYfAFMlhzzDylR_eq2w_3QmCJXVjLhk-0kGGF56niU3Gx_RnZghjKjJANNj38OQ_2kuYQM_VbuPifjZJfn0wtm3dNTke4evn80KH2xtkzpFcgKunoFuPde_mkfK5dIdtn6vwHJrxGEwJp0mCuCAaGbMCB9LcwFCRSeUH_h1YPgxFl2KETAc6WKnD0O3Xt9d3QqB4bZyEmqwMsju7ZRO5V-oPjGmx8_9grIe8ByeKWye5nBi54PkAfWPRHqfGrEkSLlrjf4xLj-JssIdViABA4MUZKruBK3nfVdDodgBhq30Ni0dpmK3JQHwJJedHntleRckFl4GCwdwr-q_449OG88kqBlUbTJ0VwWFZM0Px0C8LKiXRuiV7F-kx4AGnd8kwpkQmd1Ku8-Y1XUUgt5n8bkr3PzxbJjXX54zUqvUWpzk7hLTFlqV1-Iqbn_jiBMDJS2-lm8y7e4z-4MF5xdUIHQ7eyQhfVsJSreligZhe2wlhnzKSyl8FLwFj3mZQisHJiqVmHUqgfFMtIYucqibhC16sCyeH27sKb22dTIL5NfSLdPXTZ9svX9ubVnwXPBGMjbNm9SHiYi_uDHpKIV2sYwfvUzUS92ITzlT2vCq80JP6Li7v1KJk88gXGPymx9G-L0SX7SC5RpdIHXHuYeo5NeVQEBnoMd_DsXLMFQ-0KJeHZfOwPZLvh5GGg7IS7aJRAvAzDyetr30gpEoK9Qe2NBK4AbyNctpkydWw00_fZZhzkot-d2PG3ZIphumg1_LqU-OeCwN_jjjJBXbv6yWtZ3nd8taxHmK9CH157hcl6CyvRwU4KNY1yujLggS63ybw_3L-_uCbBgsJrZ-GMtWrD5TYBxnSxrKA5TWZpKPtP_Qe9RRlqF7gbj88BJbOOwjr_Baq0FSpz6yM_g85BxhzzAaAO-2A7-WqYG-q7cv7YMdPb0BM7fCe7INVnJNs6aDUa4ThAhDEHCHChoguvMLc8sZK0Q4W8k--hmxZy4a4ghWOeH_MGKN0aGnaj7PCxBrpzLRCutkVWElCc3oM_lpNk66KSramF=w1460-h942"
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
