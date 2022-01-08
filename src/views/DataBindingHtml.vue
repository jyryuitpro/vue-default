<template>
  <div v-html="htmlString"></div>
</template>

<script>
export default {
  name: "DataBindingHtml",
  components: {},
  data() {
    return {
      htmlString: '<p style="color: red;">This is a red string.</p>'
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