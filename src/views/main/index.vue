<template>
  <b-container class="Main" fluid>
    <b-row>
      <b-col cols="2" style="padding: 0px">
        <Sidebar />
      </b-col>
      <b-col class="cafelist" md="9" style="padding: 0px">
        <router-view />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Sidebar from '../main/Sidebar.vue'
export default {
  components: {
    Sidebar
  }
}
</script>
<style></style>
