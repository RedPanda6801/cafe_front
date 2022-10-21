<template>
  <div class="Instpage">
    <div class="Instlist">
      <h3><b-icon icon="gear" scale="0.9"></b-icon> Instructions</h3>
      <b-card no-body class="mpCCard">
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
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
      <!-- 2번째 페이지 -->
      <b-card no-body class="mpCCard">
        <b-row no-gutters>
          <b-col class="IMGGG">
            <img class="SLIDE1" src="../../../public/333.jpg" />
          </b-col>
          <b-col md="4">
            <b-card-body title="2. 카페 추가">
              <b-card-text>
                카페 추가하기를 클릭하면 카페 이름과 주소, 사업자 번호를 입력하는 창이 나옵니다. 정보를 입력하고
                추가하기를 누릅니다.</b-card-text
              >
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
      <!-- 3번째 -->
      <b-card v-if="!ON" no-body class="mpCCard">
        <b-row no-gutters>
          <b-col>
            <img class="SLIDE1" src="../../../public/222.jpg" />
          </b-col>
          <b-col md="4">
            <b-card-body title="3. 카페 리스트">
              <b-card-text>
                카페를 추가하면 리스트에 바로 추가한 카페가 보입니다. 클릭해서 들어가면 카페의 상세정보를 확인할 수
                있습니다.
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
      <!-- 4번째 -->
      <b-card no-body class="mpCCard">
        <b-row no-gutters>
          <b-col>
            <img class="SLIDE1" src="../../../public/444.jpg" />
          </b-col>
          <b-col md="4">
            <b-card-body title="4. 카페 상세정보">
              <b-card-text>
                상세 정보창에 들어가면 카페의 정보를 수정하거나 해당 카페에 소속 된 고객을 관리할 수 있습니다. 아이콘을
                클릭하면 카페의 로고를 추가할 수 있습니다. 그리고 고객관리를 클릭해서 들어가면 카페 고객의 상세정보를
                확인할 수 있습니다.
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
      <!-- 5번째 -->
      <b-card no-body class="mpCCard">
        <b-row no-gutters>
          <b-col>
            <img v-if="ON" class="SLIDE1" src="../../../public/555.jpg" />
            <img v-if="!ON" class="SLIDE1" src="../../../public/666.jpg" />
          </b-col>
          <b-col md="4">
            <b-card-body title="5. 유저 리스트">
              <b-card-text>
                고객이 스탬프를 적립하면 고객 리스트에 스탬프를 적립한 내역이 나열됩니다. 수정 아이콘을 눌러 해당 고객
                메모를 추가하여 관리할 수 있습니다.
              </b-card-text>
              <div class="BDS">
                <b-icon class="SDB" icon="chevron-right" @click="ON = !ON"></b-icon>
              </div>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
      <!-- 6번째 -->
      <b-card no-body class="mpCCard">
        <b-row no-gutters>
          <b-col>
            <img class="SLIDE1" src="../../../public/777.jpg" />
          </b-col>
          <b-col md="4">
            <b-card-body title="6. 테블릿">
              <b-card-text>
                사이드바의 테블릿 버튼을 누르면 추가한 카페의 리스트가 나열됩니다. 클릭해서 들어가면 해당 카페의 테블릿
                화면이 나옵니다.
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
      <!-- 7번째 -->
      <b-card no-body class="mpCCard">
        <b-row no-gutters>
          <b-col>
            <img v-if="titt" class="SLIDE1" src="../../../public/888.png" />
            <img v-if="!titt" class="SLIDE1" src="../../../public/999.png" />
          </b-col>
          <b-col md="4">
            <b-card-body title="7. 테블릿 사진">
              <b-card-text>
                카페 홈에서 추가한 테블릿 사진은 이곳에서 확인하실 수 있습니다. 카페 로고를 넣거나 광고를 추가하여 홍보
                효과를 볼 수 있습니다.
              </b-card-text>
              <div class="BDS">
                <b-icon class="SDB" icon="chevron-right" style="margin-top: 30px" @click="titt = !titt"></b-icon>
              </div>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
      <!-- 8번째 -->
      <b-card no-body class="mpCCard">
        <b-row no-gutters>
          <b-col>
            <img v-if="titte" class="SLIDE1" src="../../../public/10.jpg" />
            <img v-if="!titte" style="height: 450px" class="SLIDE2" src="../../../public/11.jpg" />
          </b-col>
          <b-col md="4">
            <b-card-body title="8. 적립하기">
              <b-card-text>
                고객이 핸드폰 번호를 입력하면 점장님의 모바일 화면에서 고객의 정보가 들어옵니다. 카페에서 구매하신
                가격에 따라 해당 고객의 스탬프를 적립하거나 사용하고, 취소할 수 있습니다.
              </b-card-text>
              <div class="BDS">
                <b-icon class="SDB" icon="chevron-right" style="margin-top: 30px" @click="titte = !titte"></b-icon>
              </div>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
      <!-- 9번째 -->
      <b-card no-body class="mpCCard">
        <b-row no-gutters>
          <b-col>
            <img v-if="tit" class="SLIDE1" src="../../../public/12.jpg" />
            <img v-if="!tit" class="SLIDE1" src="../../../public/13.jpg" />
          </b-col>
          <b-col md="4">
            <b-card-body title="9. 적립완료">
              <b-card-text>
                적립이 완료되면 알림이 뜨고 이후에 적립된 쿠폰의 갯수와 사용할 수 있는 쿠폰이 보여집니다. 그리고 카페
                홈의 고객 관리 페이지에서 적립한 고객의 리스트를 바로 확인할 수 있습니다.
              </b-card-text>
              <div class="BDS">
                <b-icon class="SDB" icon="chevron-right" style="margin-top: 30px" @click="tit = !tit"></b-icon>
              </div>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
      <!-- 10번째 -->
      <b-card no-body class="mpCCard">
        <b-row no-gutters>
          <b-col>
            <img v-if="ti" class="SLIDE1" src="../../../public/14.jpg" />
            <img v-if="!ti" class="SLIDE1" src="../../../public/15.jpg" />
          </b-col>
          <b-col md="4">
            <b-card-body title="10. 문의하기">
              <b-card-text>
                문의하기 페이지를 들어가면 점주님만의 Q&A 페이지로 이동 됩니다. 문의글 남기기 버튼을 클릭하여 새로운
                문의글을 작성할 수 있습니다.
              </b-card-text>
              <div class="BDS">
                <b-icon class="SDB" icon="chevron-right" style="margin-top: 30px" @click="ti = !ti"></b-icon>
              </div>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
      <!-- 11번째 -->
      <b-card no-body class="mpCCard">
        <b-row no-gutters>
          <b-col>
            <img v-if="tiw" class="SLIDE1" src="../../../public/16.jpg" />
            <img v-if="!tiw" class="SLIDE1" src="../../../public/17.jpg" />
          </b-col>
          <b-col md="4">
            <b-card-body title="11. 문의 리스트">
              <b-card-text>
                문의글을 등록하면 문의 리스트가 나열 됩니다. 리스트를 클릭해서 들어가면 문의한 내용과 매니저가 작성한
                답변을 확인 할 수 있습니다.
              </b-card-text>
              <div class="BDS">
                <b-icon class="SDB" icon="chevron-right" style="margin-top: 30px" @click="tiw = !tiw"></b-icon>
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
      ON: true,
      titt: true,
      titte: true,
      tit: true,
      ti: true,
      tiw: true
    }
  }
}
</script>

<style>
.IMGGG {
  max-height: 50vh;
}
.SDB {
  position: absolute;
  cursor: pointer;
  margin-right: 15px;
  transition: 0.5s;
}
.SDB:hover {
  transform: scale(1.3);
}
.BDS {
  position: absolute;
  top: 50%;
}
.SLIDE1 {
  margin-top: 0.5vh;
  width: 95%;
}
.SLIDE2 {
  margin-left: 30%;
  margin-top: 0.5vh;
  width: 40%;
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
  padding: 35px;
  margin-top: 30px;
  margin-bottom: 20px;
  margin-left: 7vw;
  border: none;
  border-radius: 15px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);
}
</style>
