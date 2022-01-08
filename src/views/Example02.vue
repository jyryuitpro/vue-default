<template>
  <div>
    <select v-model="city">
      <option value="02">서울</option>
      <option value="21">부산</option>
      <option value="064">제주</option>
    </select>
    <br>
<!--    <label><input type="checkbox" v-model="checked">{{checked}}</label>-->
<!--    <br>-->
<!--    <label><input type="checkbox" value="서울" v-model="checked">서울</label>-->
<!--    <label><input type="checkbox" value="부산" v-model="checked">부산</label>-->
<!--    <label><input type="checkbox" value="제주" v-model="checked">제주</label>-->
<!--    <br>-->
<!--    <span>체크한 지역: {{checked}}</span>-->
<!--    <br>-->
<!--    <label><input type="radio" value="서울" v-model="picked"/>서울</label>-->
<!--    <label><input type="radio" value="부산" v-model="picked"/>부산</label>-->
<!--    <label><input type="radio" value="제주" v-model="picked"/>제주</label>-->
<!--    <br>-->
<!--    <span>선택한 지역: {{picked}}</span>-->
<!--    <label><input type="radio" v-bind:value="radio1" v-model="picked"/>서울</label>-->
<!--    <label><input type="radio" v-bind:value="radio2" v-model="picked"/>부산</label>-->
<!--    <label><input type="radio" v-bind:value="radio3" v-model="picked"/>제주</label>-->
<!--    <br>-->
<!--    <span>선택한 지역: {{picked}}</span>-->
<!--    <br>-->
    <label><input type="radio" v-bind:value="radio[0]" v-model="picked"/>서울</label>
    <label><input type="radio" v-bind:value="radio[1]" v-model="picked"/>부산</label>
    <label><input type="radio" v-bind:value="radio[2]" v-model="picked"/>제주</label>
    <br>
    <span>선택한 지역: {{picked}}</span>
  </div>
</template>

<script>
export default {
  name: "Example02",
  components: {},
  data() {
    return {
      city: "21",
      // checked: false,
      checked: [],
      radio: ["서울", "부산", "제주"],
      radio1: "서울2",
      radio2: "부산2",
      radio3: "제주2",
      picked: "",
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
  methods() {
    //Component안에서 사용할 메소드(함수) 정의
  },
}
</script>

<style scoped>

</style>