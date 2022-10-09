<template>
  <b-container class="Main" fluid>
    <b-row>
      <b-col cols="3" style="padding: 0px">
        <app-sidebar />
      </b-col>
      <b-col class="cafelist" md="7" style="padding: 0px">
        <router-view />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Sidebar from '../main/Sidebar.vue'
export default {
  components: {
    'app-sidebar': Sidebar
  }
}
</script>

<style></style>
