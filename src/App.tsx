import { BrowserRouter } from 'react-router-dom';
import AuthRouter from 'features/common/components/AuthRouter';
import { I18nextProvider } from 'react-i18next';
import i18n from 'locales';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <AuthRouter />
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
