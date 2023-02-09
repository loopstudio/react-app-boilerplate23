import { Home } from 'features/Home';
import React from 'react';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();
  return <Home title={t('Home.title')} />;
};

export default HomePage;
