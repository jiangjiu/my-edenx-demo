import { useQuery } from '@tanstack/react-query';
import { queryClient } from '@/common/instances/queryClient';

export const queryKey = ['api/section01'];

// 怎么处理异常？打点？
export const queryFn = () => {
  return fetch('/api/section01?').then(res => res.json());
};

export const useSection01Api = () => {
  const { data, isLoading, isRefetching } = useQuery({
    queryKey,
    queryFn,
  });

  return {
    data,
    isLoading,
    isRefetching,
  };
};
// 这里有一个prefetch的钩子，
// 可以在任意节点提前请求，比如router加载的dataLoader中

// 同时，播放器是不是也可以使用同样的方式去做隔离和提速？
export const prefetchSection01 = async () => {
  // The results of this query will be cached like a normal query
  await queryClient.prefetchQuery({
    queryKey,
    queryFn,
  });
};
// 更新接口
export const updateSection01 = async () => {
  // The results of this query will be cached like a normal query
  queryClient.invalidateQueries({
    queryKey,
  });
};
