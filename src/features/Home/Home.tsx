import { MainForm } from './components/MainForm';
import { HomeProps } from './types';

import { HomeWrapper } from './Home.styles';

const Home = ({ title }: HomeProps) => (
  <HomeWrapper>
    {title}
    <MainForm />
  </HomeWrapper>
);

export { Home };
