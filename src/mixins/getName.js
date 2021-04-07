var mixin = {
  data() {
    return {
      message: 'hello',
      foo: 'abc'
    }
  },
  methods:{
    getMessage(){
      this.message = '大家好!'
    }
  }
}
export default mixin