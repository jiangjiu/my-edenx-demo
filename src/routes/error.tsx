import { useRouteError } from '@modern-js/runtime/router';

const ErrorBoundary = () => {
  const error: any = useRouteError();
  return (
    <div>
      <h1>{error.status}</h1>
      <h2>{error.message}</h2>
    </div>
  );
};
export default ErrorBoundary;
