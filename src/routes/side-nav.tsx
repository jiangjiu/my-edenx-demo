import { FC, memo } from 'react';
import { TUXButton } from '@byted-tiktok/tux-pc';
import { useSnapshot } from 'valtio';
import { useMemoizedFn } from 'ahooks';
import {
  updateUserUid,
  appContext,
} from '@/common/model/appContext/appContext';

export const SideNav: FC = memo(() => {
  const { lang, isTTP, user } = useSnapshot(appContext);
  const handleClick = useMemoizedFn(() => updateUserUid(Math.random()));
  return (
    <div className="h-screen w-1/6 justify-center items-center p-4 bg-blue-200">
      appContext:
      <div>lang:{lang}</div>
      <div>uid:{user.uid}</div>
      <div>isTTP:{isTTP ? 'true' : 'false'}</div>
      <TUXButton onClick={handleClick} label={'修改uid'} />
    </div>
  );
});
