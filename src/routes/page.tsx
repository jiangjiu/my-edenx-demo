import { Link } from '@modern-js/runtime/router';
import { TUXButton } from '@byted-tiktok/tux-pc';

const Index = () => (
  <main>
    <div>这是访问/的page</div>
    <Link to="live">
      <TUXButton variant={'primary'} label="点击访问live fyp" />
    </Link>
  </main>
);

export default Index;
