import state from './state'
import vue from 'vue'
export default {
  getName1({commit}){
    return new Promise((res)=>{
      res(11)
    })
  },
  async getName({dispatch,commit}){
    let a = await dispatch('getName1')
    console.log(a)
    vue.set(state,'异步数据',a)
    console.log('aaaa')
    $.ajax({
      method:'get',
      url:'https://cache.video.iqiyi.com/dash?tvid=4130853304141400&bid=600&vid=&src=01010031010000000000&vt=0&rs=1&uid=&ori=pcw&ps=0&k_uid=c2770f5c2f63b9aa612c4721da40652e&pt=0&d=0&s=&lid=&cf=&ct=&authKey=b32fee9cf8a103e81535d0000436f858&k_tag=1&ost=0&ppt=0&dfp=a02bad793a194b4c31a27fefdf086d30e03cdab6a8604f93327392abdb6d5c0b53&locale=zh_cn&prio=%7B%22ff%22%3A%22f4v%22%2C%22code%22%3A2%7D&pck=&k_err_retries=0&up=&qd_v=2&tm=1617776621815&qdy=a&qds=0&k_ft1=706436220846084&k_ft4=36283952406532&k_ft5=1&bop=%7B%22version%22%3A%2210.0%22%2C%22dfp%22%3A%22a02bad793a194b4c31a27fefdf086d30e03cdab6a8604f93327392abdb6d5c0b53%22%7D&ut=0&vf=f030e8477ddf4b0c0953b9dad5fa27de'
    }).then(res=>{
      console.log(res)
      // state.code = res.code
      // context.commit('setCode',res.code)
      vue.set(state,'code',res.code)
      vue.set(state,'code1',res.code)
      console.log(vue)
    })
  }
}