import { useEffect } from 'react';
import { useSnapshot } from 'valtio';
import { playerStore } from '@/common/components/discover/player/model';

export const useAppendPlayer = () => {
  const { playerContainerRef, playerDomRef } = useSnapshot(playerStore);

  useEffect(() => {
    if (
      playerContainerRef.current &&
      playerDomRef.current &&
      !playerContainerRef.current.children.length
    ) {
      playerContainerRef.current.appendChild(playerDomRef.current);
    }
  }, [playerContainerRef.current]);

  return { playerDomRef, playerContainerRef };
};
