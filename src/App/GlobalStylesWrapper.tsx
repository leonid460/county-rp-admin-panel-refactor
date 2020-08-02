import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ITheme } from 'types';
import React from 'react';

const GlobalStyle = createGlobalStyle`
  * {
    margin:  0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Roboto', sans-serif;
  }

  body {
    overflow-x: hidden;
  }

  @keyframes slide-up {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slide-down {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slide-right {
    0% {
      opacity: 0;
      transform: translateX(-20px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes turn {
    0% {
      transform: rotateY(90deg);
    }
    100% {
      transform: rotateY(0deg);
    }
  }
`;

interface TGlobalStylesProviderProps {
  theme: ITheme;
  children: React.ReactNode;
}

export const GlobalStylesProvider = ({ children, theme }: TGlobalStylesProviderProps) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);
