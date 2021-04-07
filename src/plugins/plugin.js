import dialog from './dialog.js'
import Vue from 'vue'
export default function(){
  let com = {dialog}
  for(let key in com){
    Vue.use(com[key])
  }
}