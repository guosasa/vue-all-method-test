<template>
  <div >
    <input type="text" v-model1="val" class="input">
    {{val|filterNum}}
  </div>
</template>

<script>
export default {
  data(){
    return {
      val:''
    }
  },
  directives:{
    model1:{
      bind(el,bindings,vnode){
        el.oninput=(e)=>{
          console.log(e)
          vnode.context[bindings.expression] = e.target.value;
        }
      },
    },
  },
  filters:{
    filterNum(val){
      return val.replace(/\d/g,'***')
    }
  }
}
</script>

<style lang="less">

</style>