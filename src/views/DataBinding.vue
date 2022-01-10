<template>
  <!-- Vue는 기본적으로 가장 상위 태그가 있어야 한다. (감싸줘야합니다.)-->
  <div>
    <h1>{{sampleData}}</h1>
    <div>{{sampleData2}}</div>
  </div>
</template>

<script>
export default {
  name: "DataBinding",
  components: {},
  data() {
    return {
      sampleData: 'Hello',
      sampleData2: 'World',
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