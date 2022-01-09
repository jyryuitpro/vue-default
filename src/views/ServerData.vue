<template>
  <div>
    <button type="button" @click="getProductList">조회</button>
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>배송료</th>
          <th>카테고리</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(product, i) in productList">
          <td>{{product.product_name}}</td>
          <td>{{product.price}}</td>
          <td>{{product.delivery_price}}</td>
          <td>{{product.category}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "ServerData",
  components: {},
  data() {
    return {
      productList: [],
    };
  },
  setup() {

  },
  created() {
    //Vue Component가 생성이되는 순간에 실행
  },
  mounted() {
    //Html이 실제 화면에 로딩이 되는 순간에 실행
  },
  unmounted() {
    //다른 Component로 이동할 때, 실행
  },
  methods: {
    //Component안에서 사용할 메소드(함수) 정의
    async getProductList() {
      this.productList = await this.api('https://c9054596-9ffc-4b85-8a7b-d318f8fdf95c.mock.pstmn.io/productList', 'get', {});
      console.log(this.productList);
    },
    async api(url, method, data) {
      return (await axios({
        method: method,
        url: url,
        data: data
      }).catch(e => {
        console.log(e);
      })).data;
    }
  },
}
</script>

<style scoped>

</style>