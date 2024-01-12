import { FC, memo } from 'react';
import { Link } from '@modern-js/runtime/router';
import { TUXButton } from '@byted-tiktok/tux-pc';
import { useSnapshot } from 'valtio';
import { appContext } from '@/common/model/appContext/appContext';

export const Header: FC = memo(() => {
  const { user } = useSnapshot(appContext);
  return (
    <div className="h-20 flex bg-red-200  justify-center items-center border-2 ">
      appContext.user.username:{user.username}
      <Link to="live" className={'m-2'}>
        <TUXButton variant={'primary'} label="点击访问/live" />
      </Link>
      <Link to="liveRoom" className={'m-2'}>
        <TUXButton variant={'primary'} label="点击访问/liveRoom" />
      </Link>
      <Link to="live/event" className={'m-2'}>
        <TUXButton variant={'primary'} label="点击访问/live/event" />
      </Link>
    </div>
  );
});
