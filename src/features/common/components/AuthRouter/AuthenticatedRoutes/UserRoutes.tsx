import { Route } from 'react-router-dom';

import HomePage from 'pages/HomePage';

export const UserRoutes = () => {
  return <Route index element={<HomePage />} />;
};
