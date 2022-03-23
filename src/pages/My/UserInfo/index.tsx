import Taro from '@tarojs/taro';
import { AtList, AtListItem } from 'taro-ui';

const UserInfo: Taro.FC = () => {
  const onClickSkip = (url: string) => {
    Taro.navigateTo({ url });
  };
  return (
    <AtList>
      <AtListItem title='Avator' arrow='right' />
      <AtListItem title='NickName' arrow='right' />
      <AtListItem title='Gender' arrow='right' />
      <AtListItem title='Signature' arrow='right' />
    </AtList>
  );
};

export default UserInfo;
