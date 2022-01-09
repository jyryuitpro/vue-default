<template>
  <div>
    <div>likes: {{likes}}</div>
    <div>isOk: {{isOk}}</div>
    <div>author name: {{author.name}}</div>
  </div>
</template>

<script>
export default {
  name: "ChildComponent",
  components: {},
  props: {
    likes: {
      type: Number,
      default: 0,
    },
    isOk: {
      type: Boolean,
      default: false,
    },
    commentIds: {
      type: Array,
    },
    author: {
      type: Object,
    }
  },
  data() {

  },
  setup() {

  },
  created() {
    //Vue Component가 생성이되는 순간에 실행
  },
  mounted() {
    //Html이 실제 화면에 로딩이 되는 순간에 실행
    console.log(this.commentIds);
    console.log(this.author);
    // console.log(this.author.name);
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