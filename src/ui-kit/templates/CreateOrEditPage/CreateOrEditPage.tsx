import React from 'react';
import { PageContentContainer, PrimaryButton } from 'ui-kit/atoms';
import { Base } from 'ui-kit/templates';
import * as Styled from './styled';
import { SmartForm, useSmartFormFields } from 'ui-kit/organisms';
import { ICreateOrEditPageProps } from './types';
import { callNotification } from 'utils/callNotification';

export const CreateOrEditPage = <T extends object>({
  fields,
  type,
  apiCall
}: ICreateOrEditPageProps<T>) => {
  const [formFields, formState] = useSmartFormFields(fields);

  const handleSubmit = async () => {
    try {
      const response = await apiCall(formState as T);

      if (response) {
        callNotification({ header: 'Успех', content: 'Изменения успешно сохранены', type: 'info' });
      }
    } catch (error) {
      callNotification({ header: 'Ошибка', content: error.message, type: 'error' });
    }
  };

  const renderSubmitButton = () => (
    <PrimaryButton onClick={handleSubmit}>
      {type === 'create' ? 'Создать' : 'Сохранить'}
    </PrimaryButton>
  );

  return (
    <Base>
      <PageContentContainer>
        <Styled.FormContainer>
          <SmartForm fields={formFields} />
          <Styled.ButtonsContainer>{renderSubmitButton()}</Styled.ButtonsContainer>
        </Styled.FormContainer>
      </PageContentContainer>
    </Base>
  );
};

// TODO: сделать возврат назад
