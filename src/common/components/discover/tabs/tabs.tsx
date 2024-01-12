import { memo, FC } from 'react';
import { NavLink } from '@modern-js/runtime/router';

const tabsConfig = [
  {
    path: '/live',
    label: 'foryou',
  },
  {
    path: '/following',
    label: 'following',
  },
  {
    path: '/gaming',
    label: 'gaming',
  },
  {
    path: '/live/event',
    label: 'event聚合页',
  },
];

export const Tabs: FC = memo(() => {
  return (
    <div>
      {tabsConfig.map(({ path, label }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive, isPending, isTransitioning }) =>
            [
              'm-4 p-2 border-amber-950 border-2  rounded-2xl text-xl font-bold',
              isPending ? 'bg-blue-200' : '',
              isActive ? 'bg-gray-800 text-white' : '',
              isTransitioning ? 'bg-amber-200' : '',
            ].join(' ')
          }
        >
          {label}
        </NavLink>
      ))}
    </div>
  );
});
