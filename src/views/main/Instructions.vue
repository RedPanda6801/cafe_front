<template>
  <div class="Instpage">
    <div class="Instlist">
      <h3><b-icon icon="gear" scale="0.9"></b-icon> Instructions</h3>
      <b-card v-if="show" no-body class="mpCCard">
        <b-row no-gutters>
          <b-col>
            <img class="SLIDE1" src="../../../public/111.png" />
          </b-col>
          <b-col md="4">
            <b-card-body title="1. 메인 페이지">
              <b-card-text>
                로그인을 하면 카페를 추가하고 카페 리스트를 관리할 수 있는 메인 페이지로 들어갑니다. 카페 추가하기
                버튼을 눌러 카페를 추가해보세요!
              </b-card-text>
              <div class="BDS">
                <b-icon class="SDB" icon="chevron-right" scale="2" @click="show = !show"></b-icon>
              </div>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
      <!-- 2번째 페이지 -->
      <b-card v-if="!show" no-body class="mpCCard">
        <b-row no-gutters>
          <b-col>
            <img class="SLIDE1" src="../../../public/222.jpg" />
          </b-col>
          <b-col md="4">
            <b-card-body title="2. 카페리스트 추가">
              <b-card-text> 카페를 추가하면 메인 페이지에 카페 리스트가 나옵니다. </b-card-text>
              <div class="BDS">
                <b-icon class="SDB" icon="chevron-left" scale="2" @click="show = !show"></b-icon
                ><b-icon class="SDB" icon="chevron-right" scale="2"></b-icon>
              </div>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  }
}
</script>

<style>
.SDB {
  cursor: pointer;
  margin-right: 15px;
  transition: 0.5s;
}
.SDB:hover {
  transform: scale(1.2);
}
.BDS {
  position: absolute;
  top: 80%;
}
.SLIDE1 {
  width: 85%;
}
.Instpage {
  width: 100%;
  height: 100vh;
}
.Instlist {
  width: 100%;
  height: 100vh;
  padding: 25px;
}
.mpCCard {
  width: 85%;
  height: 75vh;
  padding: 25px;
  margin-top: 20px;
  margin-left: 7vw;
  border: none;
  border-radius: 15px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);
}
</style>
