import { UserInfo } from '@tarojs/taro';
import { makeAutoObservable } from 'mobx';

class User {
  userInfo: Partial<UserInfo> = {}
  constructor() {
    // 必须加 直接监听不需要装饰器
    makeAutoObservable(this);
  }

  /** 设置用户信息 */
  setUserInfo = (params) => {
    this.userInfo = params
  };
}
export const localUser = new User();
