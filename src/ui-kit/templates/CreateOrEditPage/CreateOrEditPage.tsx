import React, { useEffect } from 'react';
import { Base } from 'ui-kit/templates';
import { Form } from 'ui-kit/molecules';
import { PageContentContainer, PrimaryButton } from 'ui-kit/atoms';
import { useHistory } from 'react-router-dom';
import { callNotification } from 'utils';

interface ICreateOrEditPageProps {
  type: 'create' | 'edit';
  goBackRoute: string;
  handleSubmit: () => Promise<void>;
  asyncCallError?: string;
  handleDelete?: () => Promise<void>;
}

export const CreateOrEditPage: React.FC<ICreateOrEditPageProps> = ({
  handleDelete,
  children,
  asyncCallError,
  goBackRoute,
  handleSubmit,
  type
}) => {
  const history = useHistory();

  const defineSubmitButtonText = () => {
    switch (type) {
      case 'create':
        return 'Создать';
      case 'edit':
        return 'Сохранить';
    }
  };

  const handleGoBack = () => {
    history.push(goBackRoute);
  };

  const renderButtons = () => (
    <>
      <PrimaryButton onClick={handleGoBack}>Отмена</PrimaryButton>
      {type === 'edit' && <PrimaryButton onClick={handleDelete}>Удалить</PrimaryButton>}
      <PrimaryButton
        onClick={() => {
          handleSubmit().then(handleGoBack);
        }}
      >
        {defineSubmitButtonText()}
      </PrimaryButton>
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
