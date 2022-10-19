<template>
  <div class="QNAhome">
    <h3 class="qnaHome"><b-icon icon="house-door" scale="0.9"></b-icon> Contact Page</h3>
    <b-card class="QNAP">
      <div>
        <p>제목</p>
      </div>
      <div>
        <p>카테고리</p>
      </div>
      <div>
        <p>작성시간</p>
      </div>
      <div>
        <p>내용</p>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {}
</script>

<style>
.QNAhome {
  width: 100%;
  height: 100vh;
  padding: 25px;
}
.QNAP {
  width: 50%;
  height: 65vh;
  padding: 25px;
  margin-top: 20px;
  margin-left: 22vw;
  border: none;
  border-radius: 15px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);
}
</style>
