<template>
  <div>
    <button-new>
      <template v-slot:default="slotProps">
        <div>我是第一种作用域插槽-------{{slotProps}}</div> 
      </template>
      
      <template #header>我是命名插槽</template>
    </button-new>
    
  </div>
</template>

<script>
import buttonNew from '../components/button.vue'
export default {
  data(){
    return {
      name:'我是数据',
      name2:'我是数据2'
    }
  },
  components:{
    buttonNew
  }
}
</script>

<style>

</style>