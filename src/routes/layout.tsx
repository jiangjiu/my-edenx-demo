import { Outlet } from '@modern-js/runtime/router';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from '@/common/instances/queryClient';

import { Header } from '@/routes/header';
import '../index.css';
import { SideNav } from '@/routes/side-nav';

export default function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <div>
          <Header />
          <div className="flex ">
            <SideNav />
            <Outlet />
          </div>
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
