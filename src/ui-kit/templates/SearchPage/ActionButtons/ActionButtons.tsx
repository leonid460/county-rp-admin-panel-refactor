import React from 'react';
import { Container } from './styled';
import { PrimaryButton } from 'ui-kit/atoms';
import { NavLink } from 'react-router-dom';
import { IActionButtonsProps } from './types';

export const ActionButtons = ({ actions }: IActionButtonsProps) => (
  <Container>
    {actions.map(({ name, route }) => (
      <PrimaryButton as={NavLink} to={route} key={name}>
        {name}
      </PrimaryButton>
    ))}
  </Container>
);
