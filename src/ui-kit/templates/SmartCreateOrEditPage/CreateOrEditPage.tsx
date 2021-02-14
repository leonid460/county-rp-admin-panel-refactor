import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { PageContentContainer, PrimaryButton } from 'ui-kit/atoms';
import { Base } from 'ui-kit/templates';
import * as Styled from './styled';
import { useSmartFormFields } from 'ui-kit/organisms';
import { SmartForm } from 'ui-kit/organisms/SmartForm';
import { ICreateOrEditPageProps } from './types';
import { getEntityIdFromUrl, callNotification } from 'utils';

export const CreateOrEditPage = <T extends object>({
  fields,
  type,
  createWriteUpdateMethod,
  goBackRoute,
  readMethod
}: ICreateOrEditPageProps<T>) => {
  const [formFields, formState] = useSmartFormFields(fields);
  const history = useHistory();
  const pathName = history.location.pathname;

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

  const useGoBack = () => {
    return () => history.push(goBackRoute);
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

  const getEditEntity = async () => {
    if (!readMethod) {
      return;
    }

    try {
      const id = getEntityIdFromUrl(pathName);
      const data = await readMethod(id);

      formFields.forEach(({ key, setValue }) => {
        const value = data[key as keyof T];

        setValue(String(value));
      });
    } catch (error) {
      callNotification({ header: 'Ошибка', content: error.message, type: 'error' });
    }
  };

  useEffect(() => {
    if (type === 'edit') {
      getEditEntity();
    }
  }, [type, pathName]);

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
