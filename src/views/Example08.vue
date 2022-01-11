<template>
  <div>
    <input type="text" v-model="lastName" />
    <input type="text" v-model="firstName" />
    <h1>Hello, {{lastName}}{{firstName}}</h1>
    <h1>Hello, {{getFullName()}}</h1>
    <h1>Hello, {{fullName}}</h1>
  </div>
</template>

<script>
export default {
  name: "Example08",
  components: {},
  data() {
    return {
      firstName: '지영',
      lastName: '류',
      //computed에 선언하면 결과적으로 동일하다.
      //fullName: this.lastName + this.firstName,
    };
  },
  //로그인 유무 파악에서 사용가능
  computed: {
    fullName() {
      //한번만 연산하면 끝
      //변경사항을 항상 감시하고 반영해준다.
      //새로 선언된 필드에 사용된 데이터 필드의 변경사항 감시하면서 새롭게 선언된 필드를 갱신한다.
      return this.lastName + this.firstName;
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
    getFullName() {
      //호출할 때마다, 동일 연산 계속 반복
      return this.lastName + this.firstName;
    },
  },
}
</script>

<style scoped>

</style>