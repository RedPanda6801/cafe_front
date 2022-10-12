<template>
  <div>
    <div class="separate-body"></div>
    <b-row>
      <b-col style="padding-left: 0px; padding-right: 0px">
        <div class="content-body">
          <router-view />
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
// import Sidebar from '../components/layout/Sidebar'

export default {
  // components: {
  //   'app-sidebar': Sidebar
  // }
}
</script>

<style lang="scss" scoped></style>
