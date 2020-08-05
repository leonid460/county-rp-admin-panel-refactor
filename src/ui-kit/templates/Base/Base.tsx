import React from 'react';
import { PageMainPart, ContentWrapper } from './styled';
import { PageContainer } from 'ui-kit/atoms';
import { LeftPanel } from 'modules/LeftPanel';
import { TopPanel } from 'modules/TopPanel';

export const Base: React.FC = ({ children }) => (
  <PageContainer>
    <LeftPanel />
    <PageMainPart>
      <TopPanel />
      <ContentWrapper>{children}</ContentWrapper>
    </PageMainPart>
  </PageContainer>
);
