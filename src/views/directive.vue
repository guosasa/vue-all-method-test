<template>
  <div >
    <input type="text" v-model1="val" class="input">
    {{val|filterNum}}
    <div class="scroll-event" v-scroll="handleScroll('text')"></div>
    <div v-focus="" class="global-event"></div>
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

      inserted(el,bindings,vnode){
        el.oninput=(e)=>{
          console.log(e)
          vnode.context[bindings.expression] = e.target.value;
        }
      },
    },
    scroll:{
      bind(el,binding,vnode){
        el.addEventListener('scroll',function(){

        })
      },
      unbind(el){
        el.removeListener('scroll')
      }
    }
  },
  methods:{
    handleScroll(text){
      console.log(1212)
    }
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