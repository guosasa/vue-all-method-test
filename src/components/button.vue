<template>
  <div>
    <h2>我是slot组件</h2>
    <slot :data="name"></slot>
    <div class="top">
      <slot name="header" :data="name"></slot>
    </div>
    
  </div>
</template>

<script>
export default {
  data(){
    return {
      name:'我是数据',
      name2:'我是数据2'
    }
  }
}
</script>

<style>

</style>