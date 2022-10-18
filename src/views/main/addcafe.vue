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
              ></b-form-input
              ><b-button @click="showApi"> 주소검색 </b-button>
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
    showApi() {
      if (typeof Postcode == 'undefined') {
        new window.daum.Postcode({
          oncomplete: data => {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 도로명 주소의 노출 규칙에 따라 주소를 조합한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            let fullRoadAddr = data.roadAddress // 도로명 주소 변수
            let extraRoadAddr = '' // 도로명 조합형 주소 변수

            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
              extraRoadAddr += data.bname
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if (data.buildingName !== '' && data.apartment === 'Y') {
              extraRoadAddr += extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName
            }
            // 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if (extraRoadAddr !== '') {
              extraRoadAddr = ' (' + extraRoadAddr + ')'
            }
            // 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.
            if (fullRoadAddr !== '') {
              fullRoadAddr += extraRoadAddr
            }

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            this.zip = data.zonecode //5자리 새우편번호 사용
            this.location = fullRoadAddr
          }
        }).open()
      }
    },

    async AddCafe() {
      const axiosBody = {
        businessNum: this.businessNum,
        cafeName: this.cafeName,
        location: this.location,
        subscribeDate: this.subscribeDate
      }
      await axios
        .post(process.env.VUE_APP_URL + '/cafe/add-cafe', axiosBody, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then(async res => {
          console.log(res)
          const code = res.data
          console.log('/cafe/add-cafe: ', code)
          // this.$router.push('/main')
          alert('카페가 추가 되었습니다.')
          this.$router.push('/main')
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
