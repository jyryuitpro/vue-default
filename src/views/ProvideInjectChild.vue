<template>
  <div>
<!--    <ProviderInjectChildChild :itemLength="itemLength"/>-->
    <ProviderInjectChildChild />
  </div>
</template>

<script>
import ProviderInjectChildChild from "@/views/ProvideInjectChildChild";
export default {
  name: "ProvideInjectChild",
  components: {
    ProviderInjectChildChild,
  },
  // props: {
  //   itemLength: {
  //     type: Number,
  //     default: 0,
  //   },
  // },
}
</script>

<style scoped>

</style>