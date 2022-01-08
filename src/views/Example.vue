<template>
  <div>
    <input type="text" v-model="valueModel"/>
    <input type="number" v-model.number="valueModel2"/>
    <textarea v-model="valueModel3"></textarea>
    <div>{{valueModel4}}</div>
  </div>
</template>

<script>
export default {
  name: "Example",
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
    let valueModel4 = 11;
    console.log(this.valueModel2)
    console.log(valueModel4)
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