import React from 'react';
import * as Styled from './styled';
import { NavLink } from 'react-router-dom';

const SvgEditIcon = () => (
  <Styled.Svg
    width="25"
    height="25"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 0H0V18H18V0ZM15.5316 5.28093C15.8241 4.98843 15.8241 4.51593 15.5316 4.22343L13.7766 2.46843C13.6364 2.32799 13.4462 2.24907 13.2478 2.24907C13.0494 2.24907 12.8592 2.32799 12.7191 2.46843L11.3466 3.84093L14.1591 6.65343L15.5316 5.28093ZM2.24906 13.0959V15.3759C2.24906 15.5859 2.41406 15.7509 2.62406 15.7509H4.90406C5.00156 15.7509 5.09906 15.7134 5.16656 15.6384L13.3566 7.45594L10.5441 4.64344L2.36156 12.8259C2.28656 12.9009 2.24906 12.9909 2.24906 13.0959Z"
      fill="#0653C0"
    />
  </Styled.Svg>
);

export const EditButton = ({ to }: { to: string }) => (
  <Styled.Container as={NavLink} to={to}>
    <SvgEditIcon />
  </Styled.Container>
);
