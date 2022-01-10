<template>
  <div>Item Length: {{this.itemLength}}</div>
  <div>Item Length: {{this.items.length}}</div>
</template>

<script>
export default {
  name: "ProvideInjectChildChild",
  // props: {
  //   itemLength: {
  //     type: Number,
  //     default: 0,
  //   }
  // },
  inject: [
    "itemLength",
    "items",
  ],
}
</script>

<style scoped>

</style>