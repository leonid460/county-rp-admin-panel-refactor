import React from 'react';
import * as Styled from './styled';

interface IWithLabelProps {
  label: string;
}

export function withLabel<T>(Component: React.ComponentType) {
  const WithLabel: React.FC<T & IWithLabelProps> = ({ label, ...props }) => (
    <Styled.Wrapper>
      <span>{label}</span>
      <Component {...props} />
    </Styled.Wrapper>
  );

  WithLabel.displayName = `${Component.displayName}WithLabel`;

  return WithLabel;
}
