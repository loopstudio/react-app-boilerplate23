import { Route, Routes } from 'react-router-dom';

const UnauthenticatedRoutes = () => {
  return (
    <Routes>
      <Route index element={<div>UnauthenticatedRoutes</div>} />
      <Route path="*" element={<>Page Not Found</>} />
    </Routes>
  );
};

export default UnauthenticatedRoutes;
