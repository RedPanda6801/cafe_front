<template>
  <div class="QQQ">
    <Sidemenu />
    <router-view />
  </div>
</template>

<script>
import Sidemenu from '../main/Sidemenu.vue'
export default {
  components: {
    Sidemenu
  }
}
</script>
<style>
.QQQ {
  width: 100%;
  margin: 0px;
  padding: 0px;
  /* display: grid; */
  grid-template-columns: 1fr 2fr;
}
</style>
