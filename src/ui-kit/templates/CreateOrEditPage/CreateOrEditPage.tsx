import React, { useEffect } from 'react';
import { Base } from 'ui-kit/templates';
import { Form } from 'ui-kit/molecules';
import { PageContentContainer, PrimaryButton } from 'ui-kit/atoms';
import { callNotification } from 'utils';

interface ICreateOrEditPageProps {
  type: 'create' | 'edit';
  handleSubmit: () => Promise<void>;
  asyncCallError?: string;
  handleGoBack: () => void;
  handleDelete?: () => Promise<void>;
}

export const CreateOrEditPage: React.FC<ICreateOrEditPageProps> = ({
  handleDelete,
  children,
  asyncCallError,
  handleSubmit,
  handleGoBack,
  type
}) => {
  const defineSubmitButtonText = () => {
    switch (type) {
      case 'create':
        return 'Создать';
      case 'edit':
        return 'Сохранить';
    }
  };

  const renderButtons = () => (
    <>
      <PrimaryButton onClick={handleGoBack}>Отмена</PrimaryButton>
      {type === 'edit' && <PrimaryButton onClick={handleDelete}>Удалить</PrimaryButton>}
      <PrimaryButton onClick={handleSubmit}>{defineSubmitButtonText()}</PrimaryButton>
    </>
  );

  useEffect(() => {
    if (asyncCallError) {
      callNotification({ header: 'Ошибка', content: asyncCallError, type: 'error' });
    }
  }, [asyncCallError]);

  return (
    <Base>
      <PageContentContainer>
        <Form renderButtons={renderButtons}>{children}</Form>
      </PageContentContainer>
    </Base>
  );
};
