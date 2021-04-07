<template>
  <div>
    {{message}}
  </div>
</template>

<script>
import mixin from '../mixins/getName.js'

export default {
  mixins:[mixin],
  data(){
    return {
      
    }
  },
  mounted(){
    this.getMessage()
  }
}
</script>

<style>

</style>