import React from 'react';
import styled from 'styled-components';

import PageContainer from 'AdminPanel/components/atoms/PageContainer';

const LoginPageContainer = styled(PageContainer)`
  justify-content: center;
  align-items: center;

  background: linear-gradient(180deg, #2a3799 0%, #298acf 100%);
`;

type PageProps = {
  children: React.ReactNode;
};

const Page = (props: PageProps) => (
  <LoginPageContainer>{props.children}</LoginPageContainer>
);

export default Page;
