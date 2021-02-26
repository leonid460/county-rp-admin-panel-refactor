import React from 'react';
import { useHistory } from 'react-router-dom';
import { PrimaryButton } from 'ui-kit/atoms';
import { ModalWindow } from 'ui-kit/organisms';
import { IInfoModalProps } from './types';
import * as Styled from './styled';

export const InfoModal = ({ heads, data, editRoute, hide }: IInfoModalProps) => {
  const history = useHistory();

  if (!data) {
    return null;
  }

  const shouldShow = !!data;
  const keys = Object.keys(data);
  const titleText = data[keys[0]];

  const handleGoToEdit = () => {
    history.push(editRoute);
  };

  return (
    <ModalWindow shouldShow={shouldShow} hide={hide} title={String(titleText)}>
      <Styled.Container>
        <Styled.RowsListContainer>
          {heads.map(({ key, name }) => (
            <Styled.Row key={key}>
              <Styled.ColumnForName>{name}</Styled.ColumnForName>
              <Styled.ColumnForValue>{data[key]}</Styled.ColumnForValue>
            </Styled.Row>
          ))}
        </Styled.RowsListContainer>
        <Styled.ButtonsContainer>
          <PrimaryButton onClick={hide}>Закрыть</PrimaryButton>
          {editRoute && <PrimaryButton onClick={handleGoToEdit}>Редактировать</PrimaryButton>}
        </Styled.ButtonsContainer>
      </Styled.Container>
    </ModalWindow>
  );
};
