import { proxy, ref } from 'valtio';
import { createRef, RefObject } from 'react';

export const playerStore = proxy({
  videoName: '西瓜视频',
  playerDomRef: ref(createRef<HTMLVideoElement>()),
  tempContainerRef: ref(createRef<HTMLDivElement>()),
  playerContainerRef: ref(createRef<HTMLDivElement>()),
});

export const updateContainerRef = (reactRef: RefObject<HTMLDivElement>) => {
  playerStore.playerContainerRef = ref(reactRef);
};

// export const updatePlayerDomRef = (reactRef: RefObject<HTMLDivElement>) => {
//   playerStore.playerDomRef = ref(reactRef);
// };
