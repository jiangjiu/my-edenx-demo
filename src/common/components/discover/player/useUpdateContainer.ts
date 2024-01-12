import { useEffect, useRef } from 'react';
import { useSnapshot } from 'valtio';
import {
  playerStore,
  updateContainerRef,
} from '@/common/components/discover/player/model';

export const useUpdateContainer = () => {
  const routeContainerRef = useRef<HTMLDivElement>(null);
  const { playerContainerRef } = useSnapshot(playerStore);

  useEffect(() => {
    console.log(123123, routeContainerRef.current);
    if (
      routeContainerRef.current &&
      playerContainerRef.current !== routeContainerRef.current
    ) {
      updateContainerRef(routeContainerRef);
    }
    return () => {
      console.log('卸载');
    };
  }, [routeContainerRef.current]);

  // useUnmount(() => {
  //           updateContainerRef(routeContainerRef);
  // })
  return { routeContainerRef };
};
