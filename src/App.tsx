import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from '@emotion/react';
import i18n from 'locales';
import theme from 'theme';

import AuthRouter from 'features/common/components/AuthRouter';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <AuthRouter />
        </BrowserRouter>
      </I18nextProvider>
    </ThemeProvider>
  );
}

export default App;
