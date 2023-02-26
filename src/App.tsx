import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { Global, ThemeProvider } from '@emotion/react';

import { AuthRouter } from 'features/common/components/AuthRouter';
import { i18n } from 'locales';
import { theme } from 'theme';

import { globalStyles } from 'App.styles';

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <ThemeProvider theme={theme}>
        <I18nextProvider i18n={i18n}>
          <BrowserRouter>
            <AuthRouter />
          </BrowserRouter>
        </I18nextProvider>
      </ThemeProvider>
    </>
  );
}

export { App };
