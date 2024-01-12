import { Outlet } from '@modern-js/runtime/router';
import { TUXButton } from '@byted-tiktok/tux-pc';
import { Section } from '@/common/components/discover/section/section';
import { updateSection01 } from '@/common/components/discover/section/sectionApiService';
import { Tabs } from '@/common/components/discover/tabs/tabs';
import { useUpdateContainer } from '@/common/components/discover/player/useUpdateContainer';

export default function Layout() {
  const { routeContainerRef } = useUpdateContainer();

  return (
    <main className={'border-8 border-amber-950 w-full p-4'}>
      <Tabs />
      <div ref={routeContainerRef} className={'w-1/2'}></div>
      <Outlet />
      <div className={'border-2 border-amber-400'}>
        ====section开始==========
        <TUXButton onClick={updateSection01} label={'更新Api接口'} />
        <Section />
      </div>
    </main>
  );
}
