import React from 'react';
import * as Styled from './styled';
import { getDisplayName } from 'utils';
import { IWithLabelProps } from './types';

export function withLabel<T>(Component: React.ComponentType<T>, id?: string) {
  const WithLabel: React.FC<IWithLabelProps & T> = ({ label, ...props }) => (
    <Styled.Wrapper htmlFor={id}>
      <span>{label}</span>
      <Styled.InnerContainer>
        <Component {...(props as T)} id={id} />
      </Styled.InnerContainer>
    </Styled.Wrapper>
  );

  WithLabel.displayName = `${getDisplayName(Component)}WithLabel`;

  return WithLabel;
}
