<template>
  <div>
<!--    ref == id-->
<!--    <button type="button" @click="callChildFunc">부모에 있는 클릭</button>-->
<!--    <ChildComponentEvent ref="child_component"/>-->
<!--    <h1>{{parentMsg}}</h1>-->
<!--    <ChildComponentEvent @send-message="sendMessage"/>-->
    <button type="button" @click="showData">부모 버튼</button>
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
      parentMsg: '',
    };
  },
  computed: {
    msg() {
      return this.$refs.child_component.msg;
    },
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
      this.$refs.child_component.msg = '부모 컴포넌트에서 변경한 메세지';
    },
    sendMessage(data) {
      alert(data);
      this.parentMsg = data;
    },
    showData() {
      alert(this.msg);
    },
  },
}
</script>

<style scoped>

</style>