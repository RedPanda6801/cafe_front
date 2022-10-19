<template>
  <div class="userContainer">
    <div class="userTable">
      <div class="userHeader">
        <h3>유저 리스트</h3>
        <div class="cafeName">
          <p>{{ cafeName }}</p>
        </div>
      </div>
      <b-table
        :hover="hover"
        :no-border-collapse="noCollapse"
        :items="items"
        :fields="fields"
        :head-variant="headVariant"
        :table-variant="tableVariant"
      ></b-table>
      <div v-show="items.length === 0">
        <p>조회할 수 있는 고객 정보가 없습니다.</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      fields: [
        { key: '고객 번호', sortable: false },
        { key: '방문 횟수', sortable: true },
        { key: '누적 쿠폰', sortable: true },
        { key: '가용 쿠폰', sortable: true },
        { key: '고객 메모', sortable: false }
      ],
      items: [
        // { '고객 번호': 2119, '방문 횟수': 10, '누적 쿠폰': 22, '가용 쿠폰': 2, '고객 메모': '착함' },
        // { '고객 번호': 1119, '방문 횟수': 20, '누적 쿠폰': 32, '가용 쿠폰': 2, '고객 메모': null },
        // { '고객 번호': 1230, '방문 횟수': 30, '누적 쿠폰': 42, '가용 쿠폰': 2, '고객 메모': null },
        // { '고객 번호': 2169, '방문 횟수': 12, '누적 쿠폰': 21, '가용 쿠폰': 1, '고객 메모': '단골' },
        // { '고객 번호': 1149, '방문 횟수': 24, '누적 쿠폰': 34, '가용 쿠폰': 4, '고객 메모': null },
        // { '고객 번호': 5230, '방문 횟수': 35, '누적 쿠폰': 45, '가용 쿠폰': 5, '고객 메모': null }
      ],
      tableVariants: 'light',
      bordered: false,
      borderless: false,
      outlined: false,
      hover: true,
      fixed: false,
      headVariant: null,
      tableVariant: '',
      noCollapse: false,
      cafeName: ''
    }
  },
  mounted() {
    this.getCafeInfo()
    this.getCustomerInfo()
  },
  methods: {
    async getCafeInfo() {
      await axios
        .get(process.env.VUE_APP_URL + `/cafe/info-one/${this.$route.params.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then(async res => {
          this.cafeName = res.data.data.cafeName
        })
        .catch(err => {
          console.log('Customer error : ', err)
        })
    },
    async getCustomerInfo() {
      await axios
        .get(process.env.VUE_APP_URL + `/customer/info/${this.$route.params.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then(async res => {
          const customers = res.data.customers
          console.log('res : ', res.data)
          for (let i = 0; i < customers.length; i++) {
            this.items.push({
              '고객 번호': customers[i].custPhone.slice(-4),
              '방문 횟수': customers[i].visit,
              '누적 쿠폰': customers[i].stackStamp,
              '가용 쿠폰': customers[i].leftStamp,
              '고객 메모': customers[i].memo
            })
          }
        })
        .catch(err => {
          console.log('Customer error : ', err)
        })
    }
  }
}
</script>

<style scoped>
.userContainer {
  display: flex;
  justify-content: center;
  /* padding: 20px; */
  /* width: 80vw;
  margin-top: 5vh; */
  width: 100%;
  height: 100vh;
  padding: 25px;
}
.userHeader {
  margin-bottom: 30px;
  font-size: 50px;
  color: #120836;
  width: 100%;
}
.userTable {
  width: 100%;
}
.cafeName {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
