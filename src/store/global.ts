import { makeAutoObservable } from 'mobx';

class Global {
  count = 1;
  constructor() {
    // 必须加 直接监听不需要装饰器
    makeAutoObservable(this);
  }

  setCount = () => {
    this.count++;
  };
}
export const localGlobal = new Global();
