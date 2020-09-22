import React from 'react';
import * as Styled from './styled';
import { getDisplayName } from 'utils';
import { IWithLabelProps } from './types';

export function withLabel<T>(Component: React.ComponentType) {
  const WithLabel: React.FC<T & IWithLabelProps> = ({ label, ...props }) => (
    <Styled.Wrapper>
      <span>{label}</span>
      <Styled.InnerContainer>
        <Component {...props} />
      </Styled.InnerContainer>
    </Styled.Wrapper>
  );

  WithLabel.displayName = `${getDisplayName(Component)}WithLabel`;

  return WithLabel;
}
