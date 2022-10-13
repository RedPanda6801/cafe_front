<template>
  <div>
    <div title="addcafe">
      <h3>AddCafe</h3>
      <div style="margin-top: 10px">
        <b-col cols="8">
          <b-form-group label-cols="3" label-cols-lg="6" label="카페이름" label-for="input-cafeName">
            <b-form-input id="input-cafeName"></b-form-input>
          </b-form-group>
          <b-form-group label-cols="3" label-cols-lg="6" label="주소" label-for="input-location">
            <b-form-input id="input-location"></b-form-input>
          </b-form-group>
          <b-form-group label-cols="3" label-cols-lg="6" label="사업자 번호" label-for="input-businessNum">
            <b-form-input id="input-businessNum"></b-form-input>
          </b-form-group>
          <b-button size="sm">결제하기</b-button>
          <b-button size="sm" type="reset" variant="danger">취소하기</b-button>
        </b-col>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    statusModal: false
  }),
  watch: {},
  methods: {}
}
</script>

<style></style>
