import { memo, FC } from 'react';
import { TUXAvatar } from '@byted-tiktok/tux-pc';

export interface SectionItemProps {
  img: string;
  title: string;
  desc: string;
}

export const SectionItem: FC<SectionItemProps> = memo(props => {
  return (
    <div className={'w-1/3 border-2 p-4'}>
      <img src={props.img} alt="" className={'h-56'} />
      <div className={'flex'}>
        <div className={'m-2'}>
          <TUXAvatar size={40} />
        </div>
        <div>
          <p>{props.title}</p>
          <p>{props.desc}</p>
        </div>
      </div>
    </div>
  );
});
