import styled from 'styled-components';

export const FormFieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-self: flex-start;

  * + * {
    margin-bottom: 10px;
  }
`;
