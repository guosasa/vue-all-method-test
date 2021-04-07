<template>
  <div class="home">
    <div class="btn" @click="$router.push('/slot')">goSlot</div> 
    <div class="btn" @click="$router.push('/mixin')">goMixin</div> 
    <div class="btn" @click="$router.push('/plugin')">goPlugin</div> 
    <div class="btn" @click="$router.push('/store')">goStore</div> 

    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
