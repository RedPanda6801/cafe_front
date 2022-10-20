<template>
  <div class="QNAhome">
    <h3 class="qnaHome"><b-icon icon="house-door" scale="0.9"></b-icon> Contact Page</h3>
    <b-card class="QNAP">
      <div>
        <p>{{ Watchqna.question.title }}</p>
      </div>
      <div>
        <p>{{ Watchqna.question.category }}</p>
      </div>
      <div>
        <p>{{ setRealFormat(Watchqna.question.createdAt) }}</p>
      </div>
      <div>
        <p>{{ Watchqna.question.text }}</p>
      </div>
    </b-card>
  </div>
</template>

<script>
import axios from 'axios'
import SetFormat from '../../assets/mixins/SetFormat.vue'
export default {
  mixins: [SetFormat],
  data() {
    return {
      Watchqna: {}
    }
  },
  mounted() {
    this.getWatchqna()
  },
  methods: {
    async getWatchqna() {
      await axios
        .get(process.env.VUE_APP_URL + `/question/info-one/${this.$route.params.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then(response => {
          console.log('getWatchqna - response : ', response.data.data)
          this.Watchqna = response.data.data
        })
        .catch(error => {
          console.log('getWatchqna - error : ', error)
        })
    }
  }
}
</script>

<style>
.QNAhome {
  width: 100%;
  height: 100vh;
  padding: 25px;
}
.QNAP {
  width: 60%;
  height: 75vh;
  padding: 25px;
  margin-top: 20px;
  margin-left: 22vw;
  border: none;
  border-radius: 15px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);
}
</style>
