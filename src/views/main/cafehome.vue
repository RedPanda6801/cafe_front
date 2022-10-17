<template>
  <div class="CAHO">
    <h3 class="CafeHome">Cafe Home</h3>
    <div class="cafehome-card">
      <div class="cafepro">
        <b-avatar size="150px" button @click="$bvModal.show('modal-cafe-img')"
          ><b-icon icon="shop" scale="3.3"></b-icon
        ></b-avatar>
        <b-modal id="modal-cafe-img" title="카페 사진 추가">
          <b-form-group>
            <b-form-file
              v-model="form.file"
              :state="Boolean(form.file)"
              placeholder="사진 추가하기..."
              required
              accept=".jpg"
              @change="previewImage"
            ></b-form-file>
            <div>
              <b-img :src="previewImageData" class="formStyle"></b-img>
            </div>
          </b-form-group>
        </b-modal>
      </div>
      <div class="cafehoMeM">
        <b-row class="my-1">
          <b-col sm="3">
            <label for="id">카페이름:</label>
          </b-col>
          <b-col sm="5">
            <p>UVC 카페</p>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="3">
            <label for="id">카페번호:</label>
          </b-col>
          <b-col sm="5">
            <p>02-475-0655</p>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="3">
            <label for="id">카페주소:</label>
          </b-col>
          <b-col sm="5">
            <p>서울시 어쩌구</p>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="3">
            <label for="id">사업자 번호:</label>
          </b-col>
          <b-col sm="5">
            <p>731-87-02887</p>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="3">
            <label for="id">멤버쉽<br />만료기간:</label>
          </b-col>
          <b-col sm="8">
            <span>~ 2022-11-11</span>
            <b-btn class="memberB">멤버쉽 결제</b-btn>
          </b-col>
        </b-row>
        <div class="cafehomeB">
          <b-btn class="cafehomeTB">테블릿 사진 변경</b-btn>
          <b-btn>고객관리</b-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        file: ''
      },
      show: true,
      previewImageData: null
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset
      this.form.file = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    previewImage(event) {
      let input = event.target

      if (input.files && input.files[0]) {
        let reader = new FileReader()
        reader.onload = e => {
          this.previewImageData = e.target.result
        }
        reader.readAsDataURL(input.files[0])
      } else {
        this.previewImageData = null
      }
    }
  }
}
</script>

<style>
.CAHO {
  width: 100%;
  height: 100vh;
}
.cafehomeTB {
  margin-right: 10px;
}
.formStyle {
  width: 10vw;
}
.cafehome-card {
  width: 100%;
  padding-left: 18%;
  display: grid;
  grid-template-columns: 1fr 4fr;
}
.CafeHome {
  margin: 25px;
}
.memberB {
  margin-left: 5vw;
  width: 8vw;
}
.cafehoMeM {
  width: 75%;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);
}
.cafehomeB {
  margin-top: 25px;
}
</style>
