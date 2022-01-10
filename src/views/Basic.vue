<!-- Vue.js 기본 구조 -->
<template>
  <div>
    <!-- 양방향 데이터 통신 -->
    <h1>{{title}}</h1>
    <!-- v-model는 value와 유사함 -->
    <input type="text" v-model="title" />
  </div>
</template>

<script>
export default {
  name: "Basic",
  components: {},
  data() {
    return {
      title: 'Hello World',
    };
  },
  setup() {

  },
  created() {
    //Vue Component가 생성이되는 순간 자동 실행
  },
  mounted() {
    //Html DOM이 실제 화면에 로딩이 완료되는 순간 자동 실행
  },
  unmounted() {
    //현재 Component에서 다른 Component로 이동할 때, 자동 실행
  },
  methods: {
    //현재 Component안에서 사용할 메소드(함수) 정의
  },
}
</script>

<style scoped>

</style>