<template>
  <div class="cafehomeList" @click="cafeRoute(cafeList.id)">
    <div class="cafeList">
      <b-avatar>
        <b-icon v-if="!cafeList.img" icon="shop"></b-icon>
        <img v-if="cafeList.img" class="ProIMG" :src="`http://192.168.0.50:8002/uploads/${cafeList.icon}`" />
      </b-avatar>
      <span class="cafeName">{{ cafeList.cafeName }}</span>
      <span class="cafelocation">{{ cafeList.location }}</span>
      <span class="cafeTime">{{ setDateFormat(cafeList.createdAt) }}</span>
    </div>
  </div>
</template>

<script>
import SetFormat from '../../assets/mixins/SetFormat.vue'
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
  width: 10vw;
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
</style>
