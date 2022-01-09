<template>
  <div>
<!--    <PageTitle v-bind:title="title"/>-->
    <page-title :title="title"/>
    <ChildComponent likes="23"/>
    <ChildComponent :likes="likes"/>
    <ChildComponent :likes="23" isOk="true"/>
    <ChildComponent :likes="23" isOk="isOk"/>
    <ChildComponent :likes="23" :isOk="true"/>
    <ChildComponent :likes="23" :commentIds="[1, 5, 2, 3]"/>
    <ChildComponent :likes="23" :commentIds="commentIds" :author="author"/>
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle";
import ChildComponent from "./ChildComponent";

export default {
  name: "Example11",
  components: {
    'page-title': PageTitle,
    ChildComponent,
  },
  data() {
    return {
      title: '부모컴포넌트에서 전송한 페이지 타이틀',
      likes: 23,
      isOk: true,
      commentIds: [1, 5, 2, 3],
      author: {
        name: '홍길동',
        company: '회사이름',
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
  },
}
</script>

<style scoped>

</style>