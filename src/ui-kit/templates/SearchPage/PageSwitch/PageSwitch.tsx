import React from 'react';
import * as Styled from './styled';
import { makeArray } from 'utils';
import { IPageSwitchProps } from './types';

export const DotsFiller = () => <Styled.DotsFiller>...</Styled.DotsFiller>;

export const PageSwitch = ({ maxPage, currentPage, setCurrentPage }: IPageSwitchProps) => {
  const renderButton = (pageNumber: number) => {
    const isActive = pageNumber === currentPage ? 1 : 0;

    return (
      <Styled.PageButton
        key={pageNumber}
        active={isActive}
        onClick={isActive ? undefined : () => setCurrentPage(pageNumber)}
      >
        {pageNumber}
      </Styled.PageButton>
    );
  };

  const renderSmallRangeOfButtons = () => {
    return makeArray(maxPage, (key) => renderButton(key + 1));
  };

  const renderLargeRangeOfButtons = () => {
    if (currentPage < 5) {
      return [
        makeArray(5, (key) => renderButton(key + 1)),
        <DotsFiller key="right-dots" />,
        renderButton(maxPage)
      ];
    }

    if (maxPage - currentPage >= 4) {
      return [
        renderButton(1),
        <DotsFiller key="left-dots" />,
        makeArray(3, (key) => renderButton(currentPage - 1 + key)),
        <DotsFiller key="right-dots" />,
        renderButton(maxPage)
      ];
    }

    return [
      renderButton(1),
      <DotsFiller key="right-dots" />,
      makeArray(5, (key) => renderButton(maxPage - 4 + key))
    ];
  };

  const renderButtons = () => {
    if (maxPage <= 7) {
      return renderSmallRangeOfButtons();
    } else {
      return renderLargeRangeOfButtons();
    }
  };

  return <Styled.Container>{renderButtons()}</Styled.Container>;
};
