<template>
  <h1 class="page-title">{{title}}</h1>
</template>

<script>
export default {
  name: "PageTitle",
  components: {},
  props: {
    title: {
      type: String,
      default: '페이지 타이틀',
    }
  },
  data() {

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
.page-title {
  padding-left: 7px;
  border-left: 3px solid green;
  text-align: left;
}
</style>