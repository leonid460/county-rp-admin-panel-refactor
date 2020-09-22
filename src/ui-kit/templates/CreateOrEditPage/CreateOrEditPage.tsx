import React from 'react';
import { PageContentContainer } from 'ui-kit/atoms';
import { Base } from 'ui-kit/templates';
import * as Styled from './styled';
import { FormFields } from './FormFields';
import { IFormField } from './FormFields/types';
import { ICreateOrEditPageProps } from './types';
import { useFormComputedState } from 'utils';

export const CreateOrEditPage = ({ fields }: ICreateOrEditPageProps) => {
  const [formState, setFormState] = useFormComputedState(fields);
  const fieldsWithState: IFormField<string | boolean>[] = fields.map((field) => ({
    name: field.name,
    type: field.type,
    value: formState[field.key],
    setValue: (value: string | boolean) => setFormState(field.key, value)
  }));

  return (
    <Base>
      <PageContentContainer>
        <Styled.FormContainer>
          <FormFields fields={fieldsWithState} />
        </Styled.FormContainer>
      </PageContentContainer>
    </Base>
  );
};
