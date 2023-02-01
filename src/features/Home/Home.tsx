import React from 'react';
import HomeWrapper from './Home.styles';
import { HomeProps } from './types';

const Home = ({ title }: HomeProps) => <HomeWrapper>{title}</HomeWrapper>;

export default Home;
