<template>
  <div>
    
  </div>
</template>

<script>

export default {
  data(){
    return {
      
    }
  },
  mounted(){
    this.$dialog.show('dialog出来啦')
  },
  beforeDestroy() {
    this.$dialog.hide()
  },
}
</script>

<style>

</style>