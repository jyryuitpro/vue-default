<template>
  <div>
<!--    ref == id-->
    <button type="button" @click="callChildFunc">부모에 있는 클릭</button>
    <ChildComponentEvent ref="child_component"/>
  </div>
</template>

<script>
import ChildComponentEvent from "./ChildComponentEvent";

export default {
  name: "Example12",
  components: {
    ChildComponentEvent,
  },
  data() {
    return {

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
    callChildFunc() {
      //$refs html 객체접근 키워드
      // this.$refs.child_component.$refs.child_btn.click();
      this.$refs.child_component.childFunc();
    },
  },
}
</script>

<style scoped>

</style>