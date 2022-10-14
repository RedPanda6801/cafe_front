<template>
  <div>
    <div title="addcafe" class="AddCafe">
      <h3>AddCafe</h3>
      <div style="margin-top: 10px">
        <b-col cols="8">
          <b-form v-if="show" @submit="onSubmit" @reset="onReset">
            <b-form-group label-cols="3" label-cols-lg="6" label="카페이름" label-for="input-cafeName">
              <b-form-input id="input-cafeName" v-model="cafeName" required></b-form-input>
            </b-form-group>
            <b-form-group label-cols="3" label-cols-lg="6" label="주소" label-for="input-location">
              <b-form-input id="input-location" v-model="location" required></b-form-input>
            </b-form-group>
            <b-form-group label-cols="3" label-cols-lg="6" label="사업자 번호" label-for="input-businessNum">
              <b-form-input id="input-businessNum" v-model="businessNum" required></b-form-input>
            </b-form-group>
            <!-- <b-button size="sm">결제하기</b-button><br /> -->
            <b-button size="sm" type="submit">저장하기</b-button>
            <b-button size="sm" type="reset" variant="danger">취소하기</b-button>
          </b-form>
        </b-col>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      cafeName: '',
      location: '',
      businessNum: ''
    }
  },
  watch: {},
  methods: {}
}
</script>

<style>
.AddCafe {
  margin: 25px;
}
</style>
