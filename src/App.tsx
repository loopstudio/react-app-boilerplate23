import { BrowserRouter } from 'react-router-dom';
import AuthRouter from 'features/common/components/AuthRouter';

function App() {
  return (
    <BrowserRouter>
      <AuthRouter />
    </BrowserRouter>
  );
}

export default App;
