import { View, Text } from '@tarojs/components';
import Taro, { UserInfo } from '@tarojs/taro';
import { Observer, useObserver } from 'mobx-react';
import { useEffect, useState } from 'react';
import { AtAvatar, AtButton } from 'taro-ui';
import { localGlobal } from '@/store/global';

import styles from './index.module.less';


const Index: Taro.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>()
  
  useEffect(()=>{
    Taro.getUserInfo({
      success: function(res) {
        setUserInfo(res?.userInfo)

        console.log(res);
        
      }
    })
  },[])

  return (
    <Observer>
      {() => (
        <View className={styles.container}>
          {userInfo?.nickName}
          <AtAvatar circle image={userInfo?.avatarUrl} />
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
