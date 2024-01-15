import { useRef, useLayoutEffect } from 'react';
import { useSnapshot } from 'valtio';
import { useLatest, useMount } from 'ahooks';
import {
  playerStore,
  updateContainerRef,
} from '@/common/components/discover/player/model';

// const useBeforeMount = (fn: () => void) => {
//   useLayoutEffect(() => {
//     fn?.();
//   }, []);
// };
const useBeforeUnmount = (fn: () => void) => {
  const fnRef = useLatest(fn);

  useLayoutEffect(
    () => () => {
      fnRef.current();
    },
    [],
  );
};
// ↑↑↑↑↑↑↑↑↑↑↑工具函数实现↑↑↑↑↑↑↑↑↑↑↑

export const useUpdateContainer = () => {
  const routeContainerRef = useRef<HTMLDivElement>(null);
  const { playerContainerRef, tempContainerRef } = useSnapshot(playerStore);

  // container dom 【ready后】，更新 updateContainerRef
  useMount(() => {
    if (
      routeContainerRef.current &&
      playerContainerRef.current !== routeContainerRef.current
    ) {
      updateContainerRef(routeContainerRef);
    }
  });

  // container dom 【卸载前】，更新tempContainerRef给 updateContainerRef
  useBeforeUnmount(() => {
    updateContainerRef(tempContainerRef);
  });

  return { routeContainerRef };
};
