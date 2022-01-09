<template>
  <div>
    <PageTitle title="부모컴포넌트에서 전송한 페이지 타이틀"/>
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle";

export default {
  name: "Example10",
  components: {
    PageTitle
  },
  data() {
    return {
      title: 'Hello World'
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
  },
}
</script>

<style scoped>

</style>