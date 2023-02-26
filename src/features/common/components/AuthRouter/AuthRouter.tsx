import { AuthenticatedRoutes } from './AuthenticatedRoutes';
import { UnauthenticatedRoutes } from './UnauthenticatedRoutes';

const AuthRouter = () => {
  // TODO: Replace the fixed "true" once we have real auth
  const isAuthenticated = true;

  return isAuthenticated ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />;
};

export { AuthRouter };
