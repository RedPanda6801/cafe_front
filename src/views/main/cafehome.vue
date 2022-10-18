<template>
  <div class="CAHO">
    <h3 class="CafeHome">Cafe Home</h3>
    <div class="cafehome-card">
      <div class="cafepro">
        <b-avatar size="150px" button @click="$bvModal.show('modal-cafe-img')"
          ><b-icon v-if="!watchCafe.img" icon="shop" scale="3.3"></b-icon>
          <img :src="watchCafe.img" />
        </b-avatar>
        <b-modal id="modal-cafe-img" title="카페 사진 추가" hide-footer>
          <b-form-group>
            <b-form-file
              v-model="avatar"
              :state="Boolean(avatar)"
              placeholder="사진 추가하기..."
              required
              accept="image/*"
              @change="previewImage"
            ></b-form-file>
            <div>
              <b-img :src="previewImageData" class="formStyle"></b-img>
              <b-btn>삭제</b-btn>
            </div>
            <b-btn variant="success" @click="updateLogo">저장</b-btn>
          </b-form-group>
        </b-modal>
      </div>
      <div class="cafehoMeM">
        <b-row class="my-1">
          <b-col sm="3">
            <label for="id">카페이름:</label>
          </b-col>
          <b-col sm="6">
            <p v-if="on">
              {{ watchCafe.cafeName }}
              <button v-if="on" class="PhoneB" variant="outline-primary" @click="on = !on">
                <b-icon icon="pencil" class="pencil"></b-icon>
              </button>
            </p>
            <b-input v-if="!on" v-model="cafeName"></b-input>
            <b-btn v-if="!on" variant="danger" @click="on = !on">취소</b-btn>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="3">
            <label for="id">카페주소:</label>
          </b-col>
          <b-col sm="8">
            <p v-if="eyes">
              {{ watchCafe.location }}
              <button v-if="eyes" class="PhoneB" variant="outline-primary" @click="eyes = !eyes">
                <b-icon icon="pencil" class="pencil"></b-icon>
              </button>
            </p>
            <b-input v-if="!eyes" v-model="location"></b-input>
            <b-btn v-if="!eyes" variant="danger" @click="eyes = !eyes">취소</b-btn>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="3">
            <label for="id">사업자 번호:</label>
          </b-col>
          <b-col sm="6">
            <p v-if="watch">
              {{ watchCafe.businessNum }}
              <button v-if="watch" class="PhoneB" variant="outline-primary" @click="watch = !watch">
                <b-icon icon="pencil" class="pencil"></b-icon>
              </button>
            </p>
            <b-input v-if="!watch" v-model="businessNum"></b-input>
            <b-btn v-if="!watch" variant="danger" @click="watch = !watch">취소</b-btn>
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
          <b-btn variant="success" @click="updateCafe">저장</b-btn>
          <b-btn class="cafehomeTB">테블릿 사진 변경</b-btn>
          <b-btn>고객관리</b-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      avatar: [],
      show: true,
      on: true,
      watch: true,
      eyes: true,
      previewImageData: null,
      watchCafe: {},
      cafeName: '',
      location: '',
      businessNum: ''
    }
  },
  mounted() {
    this.getWatchData()
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.avatar))
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset
      this.avatar = []
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
    },

    async getWatchData() {
      await axios
        .get(process.env.VUE_APP_URL + `/cafe/info-one/${this.$route.params.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then(response => {
          console.log('getWatchData - response : ', response.data.data)
          this.watchCafe = response.data.data
        })
        .catch(error => {
          console.log('getWatchData - error : ', error)
        })
    },
    async updateLogo() {
      const photoFormData = new FormData()
      photoFormData.append('image', this.avatar)
      console.log('updateLogo - photoUrl : ', this.avatar)

      await axios
        .put(process.env.VUE_APP_URL + `/cafe/update-cafe/${this.watchCafe.id}`, photoFormData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then(response => {
          console.log('updateLogo - response : ', response)
        })
        .catch(error => {
          console.log('updateLogo - error : ', error)
        })
    },
    async updateCafe() {
      const axiosBody = {
        cafeName: this.cafeName,
        location: this.location,
        businessNum: this.businessNum,
        img: this.form.file
      }
      console.log('updateCafe - axiosBody', axiosBody)

      await axios
        .put(process.env.VUE_APP_URL + `/cafe/update-cafe/${this.watchCafe.id}`, axiosBody, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then(response => {
          console.log('updateCafe - response : ', response)
          alert('카페정보가 수정 되었습니다.')
          this.$router.go()
        })
        .catch(error => {
          console.log('updateCafe - error : ', error)
        })
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
  width: 15vw;
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
