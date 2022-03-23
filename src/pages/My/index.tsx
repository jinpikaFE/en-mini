import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { Observer } from 'mobx-react';
import { useEffect } from 'react';
import {  AtList, AtListItem } from 'taro-ui';
import { localGlobal } from '@/store/global';
import { localUser } from '@/store/user';

import styles from './index.module.less';

const Index: Taro.FC = () => {
  useEffect(() => {
    Taro.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {

        // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
        localUser.setUserInfo(res.userInfo);
      },
    });
  }, []);

  return (
    <Observer>
      {() => (
        <View className={styles.container}>
          <AtList hasBorder={false}>
            <AtListItem
              className={styles.userInfo}
              hasBorder={false}
              title={localUser?.userInfo?.nickName}
              thumb={localUser?.userInfo?.avatarUrl}
              arrow='right'
            />
          </AtList>
          {localGlobal.count}
        </View>
      )}
    </Observer>
  );
};

export default Index;
