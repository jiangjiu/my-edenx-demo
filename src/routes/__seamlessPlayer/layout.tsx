import { Outlet } from '@modern-js/runtime/router';
import { Player } from '@/common/components/discover/player/player';

// __seamlessPlayer 无缝进房 保留player div

const SeamlessPlayerLayout = () => {
  return (
    <>
      <Player />
      <Outlet />
    </>
  );
};

export default SeamlessPlayerLayout;
