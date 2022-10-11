<template>
  <b-dialog b-model="dialog" persistent max-width="1000">
    <b-card class="modal">
      <div class="modalHeader">
        <h2>카페 업로드</h2>
        <b-btn icon text @click="closeModal">
          <b-icon>mdi-close</b-icon>
        </b-btn>
      </div>

      <b-divider></b-divider>
    </b-card>
  </b-dialog>
</template>

<script>
export default {
  props: {
    openDialog: Boolean
  },
  computed: {
    // dialog(props) {
    //   console.log(props.openDialog)
    //   return props.openDialog
    // }
  },
  methods: {
    closeModal() {
      this.$emit('closeDialog')
    }
  }
}
</script>

<style></style>
