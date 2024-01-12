import { memo, FC } from 'react';
import { useSnapshot } from 'valtio';
import { createPortal } from 'react-dom';
import { playerStore } from '@/common/components/discover/player/model';

export const Player: FC = memo(() => {
  const { playerDomRef, playerContainerRef } = useSnapshot(playerStore);
  // useEffect(() => {
  //   if (
  //     playerContainerRef.current &&
  //     playerDomRef.current &&
  //     !playerContainerRef.current.children.length
  //   ) {
  //     playerContainerRef.current.appendChild(playerDomRef.current);
  //   }
  // }, [playerContainerRef.current]);
  // setTimeout(() => {
  //   if (
  //     playerContainerRef.current &&
  //     playerDomRef.current &&
  //     !playerContainerRef.current.children.length
  //   ) {
  //     playerContainerRef.current.appendChild(playerDomRef.current);
  //   }
  // }, 5000);
  if (!playerContainerRef.current) {
    return null;
  }
  return (
    <div>
      {createPortal(
        <video
          autoPlay={true}
          muted={true}
          ref={playerDomRef}
          className={'w-full'}
          controls
          src="https://media.w3.org/2010/05/sintel/trailer.mp4"
        />,
        playerContainerRef.current,
      )}
    </div>
  );
});
