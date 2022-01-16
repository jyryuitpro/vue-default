<template>
  <div>
    <!-- v-model.number 숫자로 인식 가능하도록 만들어줌 -->
    <input type="text" v-model.number="x1" />
    <input type="text" v-model.number="x2" />
<!--    <button type="button" @click="plusNumber">계산</button>-->
    <input type="text" v-model="y" />
  </div>
</template>

<script>
export default {
  name: "Example09",
  components: {},
  data() {
    return {
      x1: 0,
      x2: 0,
      y: 0,
    };
  },
  //data() {} 필드에 정의된 것만 사용할 수 있다.
  //데이터의 변경사항을 바로 감시하고, 내가 원하는 데이터 필드에 바로 그 값 갱신할 수 있다.
  //computed로 변환 가능
  //해당 데이터 필드의 변경사항을 직접 감시
  watch: {
    x1() {
      this.y = this.x1 + this.x2;
    },
    x2() {
      this.y = this.x1 + this.x2;
    },
  },
  //data() {} 필드에 새로운 데이터를 선언하는 것과 유사하다. (데이터 필드를 만들어 주는 것)
  //새로 선언된 데이터 필드에 사용된 데이터 필드의 변경사항을 감시하면서 새로 선언된 데이터 필드를 갱신 함
  computed: {
    // y() {
    //   return this.x1 + this.x2;
    // },
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
    plusNumber() {
      this.y = this.x1 + this.x2;
    }
  },
}
</script>

<style scoped>

</style>