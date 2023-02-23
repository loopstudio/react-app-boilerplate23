import { Theme } from '@emotion/react';

const theme: Theme = {
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    full: '999rem',
  },
  boxShadow: {
    base: '0 0.1rem 0.3rem 0 rgba(0, 0, 0, 0.1), 0 0.1rem 0.2rem 0 rgba(0, 0, 0, 0.06)',
    darkMd:
      '0 0.4rem 0.6rem -0.1rem rgba(0, 0, 0, 0.1), 0 0.2rem 0.4rem -0.1rem rgba(0, 0, 0, 0.06)',
    darkLg:
      '0 1rem 1.5rem -0.3rem rgba(0, 0, 0, 0.1), 0 0.4rem 0.6rem -0.2rem rgba(0, 0, 0, 0.05)',
    darkXl:
      '0 2rem 2.5rem -0.5rem rgba(0, 0, 0, 0.1), 0 1rem 1rem -0.5rem rgba(0, 0, 0, 0.04)',
    indigo: '0 0 1.5rem 0.1rem rgba(102, 126, 234, 0.6)',
    none: 'none',
  },
  color: {
    black: '#000000',
    blue700: '#2b6cb0',
    blue800: '#2c5282',
    gray100: '#F7FAFC',
    gray200: '#EDF2F7',
    gray300: '#E2E8F0',
    gray600: '#718096',
    gray700: '#4A5568',
    gray800: '#2d3748',
    green700: '#2f855a',
    green800: '#276749',
    indigo200: '#c3dafe',
    indigo400: '#7F9CF5',
    indigo500: '#667EEA',
    indigo600: '#5a67d8',
    indigo700: '#4c51bf',
    red600: '#E53E3E',
    white: '#FFFFFF',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    xxl: '1.5rem',
    x3l: '1.875rem',
    x4l: '2rem',
    x5l: '2.25rem',
    x6l: '3rem',
    x7l: '4rem',
    x8l: '6rem',
  },
  height: {
    header: '4rem',
  },
  letterSpacing: {
    tighter: '-0.05rem',
    tight: '-0.025rem',
    normal: '0',
    wide: '0.025rem',
    wider: '0.05rem',
    widest: '0.1rem',
  },
};

export default theme;
