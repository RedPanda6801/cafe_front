<template>
  <div class="cafehomeList" @click="cafeRoute(cafeList.id)">
    <div class="cafeList">
      <b-avatar>
        <b-icon v-if="!cafeList.icon" icon="shop"></b-icon>
        <img v-if="cafeList.icon" class="ProIMG" :src="`http://192.168.0.50:8002/uploads/${cafeList.icon}`" />
      </b-avatar>
      <span class="cafeName">{{ cafeList.cafeName }}</span>
      <span class="cafelocation">{{ cafeList.location }}</span>
      <span class="cafeTime">{{ setDateFormat(cafeList.createdAt) }}</span>
      <button class="cafeIcon" @click="deleteCAFE"><b-icon icon="trash"></b-icon></button>
    </div>
  </div>
</template>

<script>
import SetFormat from '../../assets/mixins/SetFormat.vue'
import axios from 'axios'
export default {
  mixins: [SetFormat],
  props: {
    cafeList: {
      type: Object,
      required: true
    }
  },
  methods: {
    cafeRoute(cafeId) {
      this.$router.push(`/main/${cafeId}`)
    },
    async deleteCAFE() {
      // console.log(this.watchCafe.cafeName)
      await axios
      console
        .log('카페이름', this.cafeList.cafeName)
        .delete(process.env.VUE_APP_URL + `/profile/remove-cafe/${this.cafeList.cafeName}/${this.cafeList.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then(response => {
          console.log('deleteCafe - response : ', response)
          alert('카페가 삭제 되었습니다.')
          this.$router.go()
        })
        .catch(error => {
          console.log('deleteCafe - error : ', error)
        })
    }
  }
}
</script>

<style>
.cafehomeList {
  cursor: pointer;
  margin-bottom: 15px;
}
.cafeList {
  width: 95%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border-radius: 30px;
  transition: 0.5s;
  box-shadow: 2px 2px 2px 1px rgba(1, 1, 1, 0.1);
}
.cafeList:hover {
  background-color: rgba(232, 232, 232, 0.47);
}
.cafeName {
  margin-top: 10px;
  width: 15vw;
  text-align: center;
  font-weight: bold;
  /* background-color: azure; */
}
.cafelocation {
  margin-top: 10px;
  width: 35vw;
  text-align: center;
  /* background-color: aqua; */
}
.cafeTime {
  margin-top: 10px;
  width: 15vw;
  text-align: center;
  color: #432a9f;
  border-radius: 15px;
  /* background-color: fuchsia; */
}
.ProIMG {
  width: 100%;
  height: 100%;
}
.cafeIcon {
  margin-top: 3px;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 15px;
  z-index: 2;
}
</style>
