<template>
  <div>
    <b-card title="addcafe">
      <div style="margin-top: 10px">
        <b-row align-h="center">
          <b-col cols="8">
            <b-form-group label-cols="3" label-cols-lg="6" label="카페이름" label-for="input-cafeName">
              <b-form-input id="input-cafeName" v-model="cafeName"></b-form-input>
            </b-form-group>
            <b-form-group label-cols="3" label-cols-lg="6" label="주소" label-for="input-location">
              <b-form-input id="input-location" v-model="location"></b-form-input>
            </b-form-group>
            <b-form-group label-cols="3" label-cols-lg="6" label="사업자 번호" label-for="input-businessNum">
              <b-form-input id="input-businessNum" v-model="businessNum"></b-form-input>
            </b-form-group>
            <b-button size="sm">카페 추가하기</b-button>
            <!-- <AddcafeModal :open-dialog="statusModal" b-on :close-dialog="closeAddcafeModal" /> -->
          </b-col>
        </b-row>
      </div>
    </b-card>
  </div>
</template>

<script>
// import AddcafeModal from '../../components/AddcafeModal.vue'
export default {
  // components: { AddcafeModal },
  data: () => ({
    statusModal: false
  }),
  watch: {},
  methods: {
    // openAddcafeModal() {
    //   this.statusModal = true
    //   console.log('-- open : ', this.statusModal)
    // },
    // closeAddcafeModal() {
    //   this.statusModal = false
    //   console.log('-- close : ', this.statusModal)
    // }
  }
}
</script>

<style></style>
