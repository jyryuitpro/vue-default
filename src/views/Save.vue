<template>
  <div>
    <input type="text" v-model="userInfo.name">
    <input type="text" v-model.number="userInfo.age">
    <input type="text" v-model="userInfo.job">
    <button type="button" @click="saveUserInfo()">저장</button>
  </div>
</template>

<script>
export default {
  name: "Save",
  components: {},
  data() {
    return {
      // name: '',
      // age: 0,
      // job: '',
      userInfo: {
        name: '',
        age: 0,
        job: '',
      },
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
    saveUserInfo() {
      if(this.userInfo.name == '') {
        return alert("사용자 이름을 입력하세요.");
      }
      if(this.userInfo.age == 0 || this.userInfo.age == '') {
        return alert("나이를 입력하세요.");
      }

      // const params = {
      //   name: this.name,
      //   age: this.age,
      //   job: this.job,
      // }

      const r = this.saveData(this.userInfo);
      if (r == 'S') {
        alert('사용자 정보가 생성되엇습니다.')
      }
    },
    saveData(params) {
      console.log(params);
      const r = 'S';
      return r;
    },
  },
}
</script>

<style scoped>

</style>