<template>
  <div class="userContainer">
    <div class="userTable">
      <div>
        <h4>유저 리스트</h4>
        <h3>카페이름 들어갈 곳</h3>
      </div>
      <b-table
        :hover="hover"
        :no-border-collapse="noCollapse"
        :items="items"
        :fields="fields"
        :head-variant="headVariant"
        :table-variant="tableVariant"
      ></b-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        { key: '고객 번호', sortable: false },
        { key: '방문 횟수', sortable: true },
        { key: '누적 쿠폰', sortable: true },
        { key: '가용 쿠폰', sortable: true },
        { key: '고객 메모', sortable: false }
      ],
      items: [
        { '고객 번호': 2119, '방문 횟수': 10, '누적 쿠폰': 22, '가용 쿠폰': 2, '고객 메모': '착함' },
        { '고객 번호': 1119, '방문 횟수': 20, '누적 쿠폰': 32, '가용 쿠폰': 2, '고객 메모': null },
        { '고객 번호': 1230, '방문 횟수': 30, '누적 쿠폰': 42, '가용 쿠폰': 2, '고객 메모': null },
        { '고객 번호': 2169, '방문 횟수': 12, '누적 쿠폰': 21, '가용 쿠폰': 1, '고객 메모': '단골' },
        { '고객 번호': 1149, '방문 횟수': 24, '누적 쿠폰': 34, '가용 쿠폰': 4, '고객 메모': null },
        { '고객 번호': 5230, '방문 횟수': 35, '누적 쿠폰': 45, '가용 쿠폰': 5, '고객 메모': null }
      ],
      tableVariants: 'light',
      bordered: false,
      borderless: false,
      outlined: false,
      hover: true,
      fixed: false,
      headVariant: null,
      tableVariant: '',
      noCollapse: false
    }
  }
}
</script>

<style scoped>
.userContainer {
  display: flex;
  justify-content: center;
  padding: 20px;
  width: 80vw;
  margin-top: 5vh;
}
.userTable {
  width: 70vw;
}
</style>
