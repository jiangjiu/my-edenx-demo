import { memo } from 'react';
import { useMount } from 'ahooks';
import { useUpdateContainer } from '@/common/components/discover/player/useUpdateContainer';

const Index = memo(() => {
  const { routeContainerRef } = useUpdateContainer();

  useMount(() => {
    console.log('liveRoom  pv');
  });
  return (
    <div>
      <div ref={routeContainerRef} className={'w-2/3'}></div>;
    </div>
  );
});

export default Index;
