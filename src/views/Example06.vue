<template>
  <div>
<!--    <h1 v-if="bRender">bRender값이 true이면, h1 블록이 화면에 보여지게 됩니다.</h1>-->
<!--    <h1 v-else>bRender값이 false이면, h1 블록이 화면에 보여지게 됩니다.</h1>-->
<!--    <h1 v-if="type == 'A'">A</h1>-->
<!--    <h1 v-else-if="type == 'B'">B</h1>-->
<!--    <h1 v-else-if="type == 'C'">C</h1>-->
<!--    <h1 v-else>Other</h1>-->
    <h1 v-show="bRender">A</h1>
  </div>
</template>

<script>
export default {
  name: "Example06",
  components: {},
  data() {
    return {
      bRender: false,
      type: 'A',
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
  methods() {
    //Component안에서 사용할 메소드(함수) 정의
  },
}
</script>

<style scoped>

</style>