<template>
<!-- 속성에 데이터 바인딩하는 방법 v-bind:를 사용한다. -->

<!-- 앞에 class에 뒤에 있는 class가 add됨. -->
<!--  <div class="container" v-bind:class="{'active': isActive, 'text-red': isRed}">Class Binding</div>-->

<!--  <div class="container" v-bind:class="[activeClass, redClass]">Class Binding</div>-->

<!--  <div v-bind:style="styleObject">인라인 스타일 Binding</div>-->

  <div v-bind:style="[baseStyle, addStyle]">인라인 스타일 Binding</div>
</template>

<script>
export default {
  name: "Example04",
  components: {},
  data() {
    return {
      // isActive: true,
      // isRed: true,

      //배열
      // activeClass: 'active',
      // redClass: 'text-red',

      //Object
      //인라인 스타일은 카멜케이스로 작성합니다.
      // styleObject: {
      //   backgroundColor: 'yellow',
      //   color: 'red',
      //   fontWeight: 'bold',
      // },

      //배열
      baseStyle: 'background-color: yellow; width: 100%; height: 200px;',
      addStyle: 'color: red; font-weight: bold;'
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
.container {
  width: 100%;
  height: 200px;
}

.active {
  background-color: yellow;
  font-weight: bold;
}

.text-red {
  color: red;
}
</style>