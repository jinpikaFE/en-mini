import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { Observer, useObserver } from 'mobx-react';
import { useEffect } from 'react';
import { AtButton } from 'taro-ui';
import { localGlobal } from '@/store/global';

import styles from './index.module.less';


const Index: Taro.FC = () => {
  useEffect(()=>{

  },[])

  return (
    <Observer>
      {() => (
        <View className={styles.container}>
          <AtButton type='primary' onClick={() => localGlobal.setCount()}>
            SSSS
          </AtButton>
          {localGlobal.count}
        </View>
      )}
    </Observer>
  );
};

export default Index;
