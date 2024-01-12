import { memo, FC } from 'react';
import { TUXLoading } from '@byted-tiktok/tux-pc';
import { useSectionPresenter } from '@/common/components/discover/section/useSectionPresenter';
import {
  SectionItem,
  SectionItemProps,
} from '@/common/components/discover/section/sectionItem';

export const Section: FC = memo(() => {
  const { data, isLoading } = useSectionPresenter();

  if (isLoading) {
    return <TUXLoading />;
  }
  return (
    <>
      <h2 className={'p-4'}>LIVEs You May Like</h2>
      <div className={'flex flex-wrap'}>
        {data?.data?.map((item: SectionItemProps) => (
          <SectionItem key={item.title} {...item} />
        ))}
      </div>
    </>
  );
});
