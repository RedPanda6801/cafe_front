<template>
  <div>
    <div class="job-wrap">
      <div class="job-image">
        <img src="../../public/job.jpg" />
      </div>
      <div class="job-text">
        <p>자주묻는 질문과 답변</p>
        <span>F&Q</span>
      </div>
    </div>
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
