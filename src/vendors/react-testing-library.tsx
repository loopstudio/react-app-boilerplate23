import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, RenderOptions, RenderResult } from '@testing-library/react';

import { I18nextProvider } from 'react-i18next';
import i18n from 'locales';

const TestsWrapper = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>{children}</BrowserRouter>
    </I18nextProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
): RenderResult => render(ui, { wrapper: TestsWrapper, ...options });

export * from '@testing-library/react';
export { customRender as render };
