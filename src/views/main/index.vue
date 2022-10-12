<template>
  <div class="Main">
    <Sidebar />
    <router-view />
  </div>
</template>

<script>
import Sidebar from '../main/Sidebar.vue'
export default {
  components: {
    Sidebar
  }
}
</script>
<style>
.Main {
  margin: 0px;
  padding: 0px;
  display: grid;
  grid-template-columns: 1fr 2fr;
}
</style>
