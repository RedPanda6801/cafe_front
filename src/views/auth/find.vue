<template>
  <div class="join">
    <!--ID 찾기 누르면 이동할 페이지-->
    <b-card no-body style="max-width: 50rem" img-src="#" img-alt="Image" img-top>
      <template #header>
        <h4 class="mb-0">ID/PW 찾기 위에는 사이트로고</h4>
      </template>
      <!-- tab 만들어서 ID 찾기 / PW 찾기 왔다갔다 할 수 있게 할지, 따로따로 URL 만들지 고민 -->
      <b-card-body>
        <!-- <b-card-sub-title class="mb-2">subtitle</b-card-sub-title> -->
        <b-card-title>회원정보</b-card-title>
        <b-card-text>
          <!-- 여기에 input 태그들 -->
        </b-card-text>
      </b-card-body>

      <b-list-group flush>
        <b-list-group-item><b-button></b-button></b-list-group-item>
        <b-list-group-item>여기에 안내사항들 리스트로 표기 </b-list-group-item>
        <!-- <b-list-group-item>Vestibulum at eros</b-list-group-item> -->
      </b-list-group>

      <b-card-body>
        <a href="#" class="card-link">로그인창으로 돌아가기</a>
        <a href="#" class="card-link">Another link</a>
      </b-card-body>

      <b-card-footer>이용약관/개인정보 처리방침/고객센터 등 footer</b-card-footer>
      <!-- <b-card-img src="https://placekitten.com/480/210" alt="Image" bottom></b-card-img> -->
    </b-card>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
