import dialog from './dialog.js'
import focus from '../directives/scroll.js'
import Vue from 'vue'
export default function(){
  let com = {dialog,focus}
  for(let key in com){
    Vue.use(com[key])
    console.log(com[key])
  }
}