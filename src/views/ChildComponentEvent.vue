<template>
  <div>
    <button type="button" @click="childFunc" ref="child_btn">자식에 있는 클릭</button>
  </div>
</template>

<script>
export default {
  name: "ChildComponentEvent",
  components: {},
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
    childFunc() {
      alert('부모 컴포넌트에서 직접 발생시킨 이벤트');
    },
  },
}
</script>

<style scoped>

</style>