<template>
  <div>
<!--    <button type="button" v-on:click="increaseCounter">Add 1</button>-->
    <button type="button" @click="increaseCounter">Add 1</button>
    <p>The count is : {{counter}}</p>
    <button type="button" @click="one(), two()">One Two</button>
    <br>
    <select v-model="city" @change="changeSelect">
      <option value="서울">서울</option>
      <option value="부산">부산</option>
      <option value="제주">제주</option>
    </select>
    <br>
<!--    <input type="text" v-model="textValue" @keyup.enter="showValue" />-->
    <input type="text" v-model="textValue" @keyup="showValue" />
  </div>
</template>

<script>
export default {
  name: "Example07",
  components: {},
  data() {
    return {
      counter: 0,
      city: '',
      textValue: '',
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
    increaseCounter() {
      this.counter = this.counter + 1;
    },
    one() {
      alert('One');
    },
    two() {
      alert('Two');
    },
    changeSelect() {
      alert(this.city);
    },
    showValue() {
      //tab, delete, esc, space, up, down, left, right
      alert(this.textValue);
    },
  },
}
</script>

<style scoped>

</style>