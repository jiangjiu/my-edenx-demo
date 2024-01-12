import { useSection01Api } from '@/common/components/discover/section/sectionApiService';

export const useSectionPresenter = () => {
  const { data, isLoading, isRefetching } = useSection01Api();

  return {
    data,
    isLoading,
    isRefetching,
  };
};
