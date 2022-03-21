import Taro, { useReady, useDidShow } from '@tarojs/taro';
import { Component, useEffect } from 'react'
import "taro-ui/dist/style/index.scss"; 
import './app.less'

const App = (props) => {
  useEffect(() => {
    const query = Taro.login({
      success (res) {
        if (res.code) {
          console.log(res);
          
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
    
  },[])

  return props.children
}

export default App
