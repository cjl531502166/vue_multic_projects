<template>
  <div id="container" class="container">

  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    onFileChange(e) {
      let file = e.target.files[0];
    }
  }
};
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>
