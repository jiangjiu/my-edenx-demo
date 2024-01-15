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
      <div ref={routeContainerRef} className={'w-[1200px] h-[400px]'}></div>;
    </div>
  );
});

export default Index;
