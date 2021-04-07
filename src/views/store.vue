<template>
  <div>
    {{count}}
    {{$store.state}}
    <div class="btn" @click="getName1">getName1</div>
    <div class="btn" @click="setNum">setNum</div>
  </div>
</template>

<script>

import { mapState } from 'vuex'
export default {
  data(){
    return {
      
    }
  },
  methods:{
    getName1(){
      this.$store.dispatch('getName')
    },
    setNum(){
      this.$store.commit('add')
    }
  },
   computed:{
    ...mapState({
      count:state=>state.num
    })
  },
}
</script>

<style>

</style>