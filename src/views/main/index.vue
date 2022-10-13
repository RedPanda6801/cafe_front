<template>
  <div class="Main">
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
.Main {
  width: 100%;
  margin: 0px;
  padding: 0px;
  /* display: grid; */
  grid-template-columns: 1fr 2fr;
}
</style>
