<template>
  <div>
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
  watch: {
    x1() {
      this.y = this.x1 + this.x2;
    },
    x2() {
      this.y = this.x1 + this.x2;
    },
  },
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