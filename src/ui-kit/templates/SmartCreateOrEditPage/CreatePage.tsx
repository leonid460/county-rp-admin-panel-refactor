import React from 'react';
import { ICreateOrEditPageProps } from './types';
import { SmartForm, useSmartFormFields } from 'ui-kit/organisms';
import { callNotification } from 'utils';
import { useHistory } from 'react-router-dom';
import { PageContentContainer, PrimaryButton } from 'ui-kit/atoms';
import { Base } from 'ui-kit/templates';
import * as Styled from './styled';

export const CreatePage = <T extends object>({
  fields,
  type,
  createWriteUpdateMethod,
  goBackRoute
}: ICreateOrEditPageProps<T>) => {
  const [formFields, formState] = useSmartFormFields(fields);
  const history = useHistory();

  const handleSubmit = async () => {
    try {
      const response = await createWriteUpdateMethod(formState as T);

      if (response) {
        callNotification({ header: 'Успех', content: 'Изменения успешно сохранены', type: 'info' });
      }
    } catch (error) {
      callNotification({ header: 'Ошибка', content: error.message, type: 'error' });
    }
  };

  const goBack = () => {
    return history.push(goBackRoute);
  };

  const renderButtons = () => (
    <>
      <PrimaryButton onClick={goBack}>Отмена</PrimaryButton>
      <PrimaryButton onClick={handleSubmit}>
        {type === 'create' ? 'Создать' : 'Сохранить'}
      </PrimaryButton>
    </>
  );

  return (
    <Base>
      <PageContentContainer>
        <Styled.FormContainer>
          <SmartForm fields={formFields} />
          <Styled.ButtonsContainer>{renderButtons()}</Styled.ButtonsContainer>
        </Styled.FormContainer>
      </PageContentContainer>
    </Base>
  );
};
