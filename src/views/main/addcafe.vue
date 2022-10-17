<template>
  <div>
    <div title="addcafe" class="AddCafe">
      <h3>AddCafe</h3>
      <div style="margin-top: 10px">
        <b-col cols="6">
          <b-form v-if="show" @reset="onReset">
            <b-form-group id="input-group-1" label="카페이름:" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="cafeName"
                type="text"
                placeholder="카페 이름을 입력하세요"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="주소:" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="location"
                type="text"
                placeholder="카페 주소를 입력하세요"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="사업자 번호:" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="businessNum"
                type="number"
                placeholder="사업자 번호를 입력하세요"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="구독 일자:" label-for="input-2">
              <b-form-input id="input-2" v-model="subscribeDate" required></b-form-input>
            </b-form-group>

            <!-- <b-button size="sm">결제하기</b-button><br /> -->
            <b-button variant="primary" @click="AddCafe">추가하기</b-button>
            <b-button type="reset" variant="danger">취소하기</b-button>
          </b-form>
        </b-col>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      cafeName: '',
      location: '',
      businessNum: '',
      subscribeDate: '',
      show: true
    }
  },
  methods: {
    onReset(event) {
      event.preventDefault()
      this.cafeName = ''
      this.location = ''
      this.businessNum = ''
      this.subscribeDate = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    async AddCafe() {
      const axiosBody = {
        businessNum: this.businessNum,
        cafeName: this.cafeName,
        location: this.location,
        subscribeDate: this.subscribeDate
      }
      await axios
        .post(process.env.VUE_APP_URL + '/cafe/add-cafe', axiosBody)
        .then(async res => {
          console.log(res)
          const code = res.data
          console.log('/cafe/add-cafe: ', code)
          // this.$router.push('/main')
          alert('카페가 추가 되었습니다.')
        })
        .catch(err => {
          alert('다시 시도해주세요!')
          console.log('/auth/login - error: ', err)
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
