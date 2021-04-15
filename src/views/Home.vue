<template>
  <div class="home">
    <div class="btn" @click="$router.push('/slot')">goSlot</div>
    <div class="btn" @click="$router.push('/mixin')">goMixin</div>
    <div class="btn" @click="$router.push('/plugin')">goPlugin</div>
    <div class="btn" @click="$router.push('/store')">goStore</div>
    <div class="btn" @click="$router.push('/directive')">goDirective</div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <el-btn class="btn-plugin"></el-btn>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
<style lang="less">
.btn {
  position: sticky;
  top: 2em;
}
</style>