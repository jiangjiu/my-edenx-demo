import { proxy } from 'valtio';

export const appContext = proxy({
  lang: 'en',
  user: { uid: 123123123, username: '用户02' },
  clusterRegion: 'MALI_VA',
  // 计算属性
  get isTTP() {
    return this.clusterRegion === 'TTP';
  },
});

export const updateUserUid = (uid: number) => {
  appContext.user.uid = uid;
};
