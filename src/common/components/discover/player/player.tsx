import { memo, FC, useEffect } from 'react';
import { useSnapshot } from 'valtio';
import { playerStore } from '@/common/components/discover/player/model';

export const Player: FC = memo(() => {
  const { playerDomRef, playerContainerRef, tempContainerRef } =
    useSnapshot(playerStore);
  useEffect(() => {
    if (
      playerContainerRef.current &&
      playerDomRef.current &&
      !playerContainerRef.current.children.length
    ) {
      playerContainerRef.current.appendChild(playerDomRef.current);
    }
  }, [playerContainerRef.current]);

  if (!playerContainerRef.current) {
    return null;
  }

  return (
    // 这个暂存dv  在切换的那段瞬间作为container，保持video状态
    <div ref={tempContainerRef} className={'hidden'}>
      <video
        autoPlay={true}
        muted={true}
        ref={playerDomRef}
        className={'w-full'}
        controls
        src="https://media.w3.org/2010/05/sintel/trailer.mp4"
      />
    </div>
  );
});
