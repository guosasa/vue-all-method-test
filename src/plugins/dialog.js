import dialog from '../components/dialog.vue'
export default {
  install(Vue){
    let Com = Vue.extend(dialog)
    let $vm = null
    Vue.prototype.$dialog = {
      show(name){
        $vm = new Com({
          el:document.createElement('div'),
          data(){
            return {
              name
            }
          }
        })
        document.getElementsByTagName('body')[0].appendChild($vm.$el)
      },
      hide(){
        $vm.$destroy()
        document.getElementsByTagName('body')[0].removeChild($vm.$el)
      }
    }

  },
  
}