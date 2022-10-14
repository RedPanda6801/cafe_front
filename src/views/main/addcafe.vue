<template>
  <div>
    <div title="addcafe" class="AddCafe">
      <h3>AddCafe</h3>
      <div style="margin-top: 10px">
        <b-col cols="6">
          <b-form v-if="show" @submit="onSubmit" @reset="onReset">
            <b-form-group id="input-group-1" label="카페이름:" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="form.cafeName"
                type="text"
                placeholder="카페 이름을 입력하세요"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="주소:" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="form.location"
                type="text"
                placeholder="카페 주소를 입력하세요"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="사업자 번호:" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="form.businessNum"
                type="number"
                placeholder="사업자 번호를 입력하세요"
                required
              ></b-form-input>
            </b-form-group>

            <!-- <b-button size="sm">결제하기</b-button><br /> -->
            <b-button type="submit" variant="primary">추가하기</b-button>
            <b-button type="reset" variant="danger">취소하기</b-button>
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
      form: {
        cafeName: '',
        location: '',
        businessNum: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault()
      this.form.cafeName = ''
      this.form.location = ''
      this.form.businessNum = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
<style>
.AddCafe {
  margin: 25px;
}
</style>
