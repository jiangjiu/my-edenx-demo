import { useMount } from 'ahooks';
import { memo } from 'react';

const Index = memo(() => {
  useMount(() => {
    console.log('fouyou  pv');
  });
  return <div>这是/live</div>;
});

export default Index;
