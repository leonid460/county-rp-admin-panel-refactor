import React, { useState } from 'react';
import * as Styled from './styled';
import { SearchModal } from './SearchModal';
import { ISearchProps } from './types';
import { ClearButton } from './ClearButton';

export const Search: React.FC<ISearchProps> = ({
  getFilterBy,
  currentItem,
  setCurrentItem,
  id
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const shouldShowClearButton = !!currentItem;

  const showModal = () => setModalIsOpen(true);

  const hideModal = () => setModalIsOpen(false);

  const handleClear = () => {
    setCurrentItem(null);
  };

  return (
    <>
      <Styled.OpenerContainer>
        <Styled.OpenerTextContainer onClick={showModal} id={id}>
          {currentItem?.name || ''}
        </Styled.OpenerTextContainer>
        {shouldShowClearButton && <ClearButton onClick={handleClear} />}
      </Styled.OpenerContainer>
      <SearchModal
        shouldShow={modalIsOpen}
        hide={hideModal}
        getFilterBy={getFilterBy}
        setValue={setCurrentItem}
      />
    </>
  );
};
