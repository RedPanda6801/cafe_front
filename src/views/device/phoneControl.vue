<template>
  <div class="phoneContainer">
    <b-card class="cardContainer">
      <b-card-text>
        <div class="stampSelect">
          <div class="quantity">
            <h2>0119님</h2>
            <h6 class="mb-5">고객 메모: 착함</h6>
            <b-input-group>
              <b-input-group-prepend>
                <b-btn variant="info" @click="decrement()">-</b-btn>
              </b-input-group-prepend>
              <b-form-input size="lg" type="number" min="0.00" :value="quantity"></b-form-input>
              <b-input-group-append>
                <b-btn variant="info" @click="increment()">+</b-btn>
              </b-input-group-append>
            </b-input-group>
          </div>
        </div>
        <b-button block href="#" variant="primary">적립하기</b-button>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Quantity',
  data() {
    return {
      quantity: 1
    }
  },
  methods: {
    increment() {
      this.quantity++
    },
    decrement() {
      if (this.quantity === 1) {
        alert('Negative quantity not allowed')
      } else {
        this.quantity--
      }
    }
  }
}
</script>

<style scoped>
.phoneContainer {
  display: flex;
  justify-content: center;
  background-color: rgb(255, 174, 174);
}
.stampSelect {
  height: 400px;
  width: 300px;
  justify-content: center;
  display: flex;
  align-content: center;
}
.quantity {
  width: 200px;
}
.cardContainer {
  height: 100vh;
  padding: 10px;
}
</style>
