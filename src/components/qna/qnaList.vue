<template>
  <div class="QNAhomeList">
    <div class="QNAList">
      <span class="QNAName">답변여부</span>
      <span class="QNAtitle">{{ qnaList.title }}</span>
      <span class="QNAcategory">{{ qnaList.category }}</span>
      <span class="QNATime">{{ setFormat(qnaList.createdAt) }}</span>
    </div>
  </div>
</template>

<script>
import SetFormat from '../../assets/mixins/SetFormat.vue'
export default {
  mixins: [SetFormat],
  props: {
    qnaList: {
      type: Object,
      required: true
    }
  },
  methods: {
    // cafeRoute(cafeId) {
    //   this.$router.push(`/main/${cafeId}`)
    // }
  }
}
</script>

<style>
.QNAhomeList {
  cursor: pointer;
  margin-bottom: 15px;
}
.QNAList {
  width: 95%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border-radius: 30px;
  transition: 0.5s;
  box-shadow: 2px 2px 2px 1px rgba(1, 1, 1, 0.1);
}
.QNAList:hover {
  background-color: rgba(232, 232, 232, 0.47);
}
.QNAName {
  margin-top: 5px;
  width: 10vw;
  text-align: center;
  font-weight: bold;
}
.QNAtitle {
  margin-top: 5px;
  width: 35vw;
  text-align: center;
  font-weight: bold;
}
.QNAcategory {
  margin-top: 5px;
  width: 20vw;
  text-align: center;
}
.QNATime {
  margin-top: 5px;
  width: 15vw;
  text-align: center;
  color: #432a9f;
  border-radius: 15px;
}
</style>
