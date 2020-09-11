import React from 'react';
import { PageMainPart, ContentWrapper } from './styled';
import { PageContainer } from 'ui-kit/atoms';
import { LeftPanel } from 'modules/common/LeftPanel';
import { TopPanel } from 'modules/common/TopPanel';

export const Base: React.FC = ({ children }) => (
  <PageContainer>
    <LeftPanel />
    <PageMainPart>
      <TopPanel />
      <ContentWrapper>{children}</ContentWrapper>
    </PageMainPart>
  </PageContainer>
);
