import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  console.log("我想测试")
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    // 渲染组件
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
      data(){
        return {
          content:'大家好'
        }
      }
    })
    // expect(wrapper.text()).toMatch(msg1)
    expect(wrapper.find('.message').text()).toEqual('Hello World')
  })
})
