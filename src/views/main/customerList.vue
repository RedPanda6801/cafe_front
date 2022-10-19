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
      >
        <template v-slot:cell(edit)="{ item }">
          <span>
            <button v-b-modal.modal-prevent-closing class="PhoneB" variant="outline-primary" @click="editMemo(item)">
              <b-icon icon="pencil" class="pencil"></b-icon>
            </button>
          </span>
        </template>
      </b-table>
      <div v-show="items.length === 0">
        <p>조회할 수 있는 고객 정보가 없습니다.</p>
      </div>
    </div>
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="수정하실 고객메모를 입력해 주세요."
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="고객 메모"
          label-for="memo-input"
          invalid-feedback="메모를 입력해주세요!"
          :state="memoState"
        >
          <b-form-input id="memo-input" v-model="memo" :state="memoState" required></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
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
        { key: '고객 메모', sortable: false },
        { key: 'edit', sortable: false }
      ],
      items: [],
      tableVariants: 'light',
      bordered: false,
      borderless: false,
      outlined: false,
      hover: true,
      fixed: false,
      headVariant: null,
      tableVariant: '',
      noCollapse: false,
      cafeName: '',
      memo: '',
      memoState: null,
      custPhone: ''
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
        .get(process.env.VUE_APP_URL + `/stamp/search-all/${this.$route.params.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then(res => {
          const customers = res.data.customers
          console.log('res : ', res.data)
          for (let i = 0; i < customers.length; i++) {
            this.items.push({
              phone: customers[i].custPhone,
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
    },
    async updateCustomerMemo() {
      const axiosBody = {
        memo: this.memo
      }
      await axios
        .put(process.env.VUE_APP_URL + `/stamp/update-memo/${this.custPhone}/${this.$route.params.id}`, axiosBody, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then(async res => {
          console.log('res : ', res)
        })
        .catch(err => {
          console.log('Customer error : ', err)
        })
    },
    editMemo(item) {
      console.log(item.phone)
      this.custPhone = item.phone
    },
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
      this.memoState = valid
      return valid
    },
    resetModal() {
      this.memo = ''
      this.memoState = null
    },
    handleOk(bvModalEvent) {
      bvModalEvent.preventDefault()
      this.handleSubmit()
    },
    handleSubmit() {
      if (!this.checkFormValidity()) {
        return
      }
      this.$nextTick(async () => {
        await this.updateCustomerMemo()
        this.items = []
        this.getCustomerInfo()
        this.$bvModal.hide('modal-prevent-closing')
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
