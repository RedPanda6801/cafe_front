<template>
  <div class="phoneContainer">
    <b-card title="고객메모 들어갈 곳" header-tag="header" footer-tag="footer">
      <template #header>
        <h6 class="mb-0">고객 휴대폰번호 뒷자리</h6>
      </template>
      <b-card-text>
        <div class="stampSelect">
          <div class="qty mt-5">
            <span class="minus bg-dark">-</span>
            <input type="number" class="count" name="qty" value="1" />
            <span class="plus bg-dark">+</span>
          </div>
        </div>
      </b-card-text>
      <b-button block href="#" variant="primary">적립하기</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  methods: {}
}
</script>

<style scoped>
.phoneContainer {
  display: flex;
  justify-content: center;
  background-color: rgb(255, 174, 174);
  max-height: 1000px;
}
.stampSelect {
  height: 400px;
  width: 300px;
}
.qty .count {
  color: #000;
  display: inline-block;
  vertical-align: top;
  font-size: 25px;
  font-weight: 700;
  line-height: 30px;
  padding: 0 2px;
  min-width: 35px;
  text-align: center;
}
.qty .plus {
  cursor: pointer;
  display: inline-block;
  vertical-align: top;
  color: white;
  width: 30px;
  height: 30px;
  font: 30px/1 Arial, sans-serif;
  text-align: center;
  border-radius: 50%;
}
.qty .minus {
  cursor: pointer;
  display: inline-block;
  vertical-align: top;
  color: white;
  width: 30px;
  height: 30px;
  font: 30px/1 Arial, sans-serif;
  text-align: center;
  border-radius: 50%;
  background-clip: padding-box;
}
div {
  text-align: center;
}
.minus:hover {
  background-color: #717fe0 !important;
}
.plus:hover {
  background-color: #717fe0 !important;
}
/*Prevent text selection*/
span {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
input {
  border: 0;
  width: 2%;
}
nput::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input:disabled {
  background-color: white;
}
</style>
