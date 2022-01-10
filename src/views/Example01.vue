<template>
  <div>
    <!-- v-model == value -->
    <input type="text" v-model="valueModel"/><!-- 문자열로 인식 -->
    <br>
    <input type="number" v-model.number="valueModel2"/><!-- 숫자로 인식 -->
    <br>
    <textarea v-model="valueModel3"></textarea>
    <br>
    <div>{{valueModel3}}</div>
  </div>
</template>

<script>
export default {
  name: "Example01",
  components: {},
  data() {
    return {
      valueModel: 'South Korea',
      valueModel2: 12,
      valueModel3: '안녕하세요.',
    };
  },
  setup() {

  },
  created() {
    //Vue Component가 생성이되는 순간에 실행
  },
  mounted() {
    //Html이 실제 화면에 로딩이 되는 순간에 실행
    //data() {}에서 정의한 변수는 this.으로만 접근이 가능하다.
    console.log(this.valueModel2);

    let valueModel4 = 11;
    console.log(valueModel4);
  },
  unmounted() {
    //다른 Component로 이동할 때, 실행
  },
  methods() {
    //Component안에서 사용할 메소드(함수) 정의
    //this.으로만 접근이 가능하다.
  },
}
</script>

<style scoped>

</style>