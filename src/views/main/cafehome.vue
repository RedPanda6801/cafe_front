<template>
  <div>
    <b-card>
      <b-avatar size="100px" button @click="$bvModal.show('modal-cafe-img')"
        ><b-icon icon="shop" scale="2.5"></b-icon
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
      <b-row class="my-1">
        <b-col sm="2">
          <label for="id">카페이름:</label>
        </b-col>
        <b-col sm="5">
          <p id="id">UVC카페</p>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="2">
          <label for="id">카페번호:</label>
        </b-col>
        <b-col sm="5">
          <p id="id">02-475-0655</p>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="2">
          <label for="id">카페주소:</label>
        </b-col>
        <b-col sm="5">
          <p id="id">서울시 어쩌구</p>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="2">
          <label for="id">사업자 번호:</label>
        </b-col>
        <b-col sm="5">
          <p id="id">731-87-02887</p>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="2">
          <label for="id">멤버쉽 만료기간:</label>
        </b-col>
        <b-col sm="5">
          <p id="id">~ 2022-11-11</p>
        </b-col>
      </b-row>
      <div class="cafehomeB">
        <b-btn class="cafehomeTB">테블릿 사진 변경</b-btn>
        <b-btn>고객관리</b-btn>
      </div>
    </b-card>
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
.cafehomeTB {
  margin-right: 10px;
}
.formStyle {
  width: 10vw;
}
</style>
