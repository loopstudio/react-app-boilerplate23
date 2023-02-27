import { Route, Routes } from 'react-router-dom';

import { HomePage } from 'pages/HomePage';

const AuthenticatedRoutes = () => {
  return (
    <Routes>
      <Route index path="/:lang?" element={<HomePage />} />
      <Route path="*" element={<>Page Not Found</>} />
    </Routes>
  );
};

export { AuthenticatedRoutes };
