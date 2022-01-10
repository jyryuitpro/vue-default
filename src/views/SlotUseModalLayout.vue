<template>
  <modal-layout>
    <template v-slot:header>
      <h1>팝업 타이틀</h1>
    </template>
    <template v-slot:main>
      <p>팝업 컨텐츠 1</p>
      <p>팝업 컨텐츠 2</p>
    </template>
    <template v-slot:footer>
      <button type="button">닫기</button>
    </template>
  </modal-layout>
</template>

<script>
//SlotModalLayout를 import후 재정의 할 수 있다.
import SlotModalLayout from "@/views/SlotModalLayout";
export default {
  name: "SlotUseModalLayout",
  components: {
    "modal-layout": SlotModalLayout,
  },
  data() {
    return {

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
  },
}
</script>

<style scoped>

</style>