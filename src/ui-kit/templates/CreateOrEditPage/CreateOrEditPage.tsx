import React from 'react';
import { useHistory } from 'react-router-dom';
import { PageContentContainer, PrimaryButton } from 'ui-kit/atoms';
import { Base } from 'ui-kit/templates';
import * as Styled from './styled';
import { useSmartFormFields } from 'ui-kit/organisms';
import { SmartForm } from 'ui-kit/organisms/SmartForm';
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

  const useGoBack = () => {
    const history = useHistory();
    const pathName = history.location.pathname;
    const rests = pathName.split('/');
    rests.pop();
    const newPathName = rests.join('/');

    return () => history.push(newPathName);
  };

  const goBack = useGoBack();

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
