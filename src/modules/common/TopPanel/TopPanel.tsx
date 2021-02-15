import React from 'react';
import { locations } from 'locations';
import { useLocation, matchPath } from 'react-router-dom';
import * as Styled from './styled';
import { MiniProfile } from './MiniProfile';
import { LeftPanelOpener } from 'modules/common/LeftPanelOpener';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectIsLoading, selectUsername } from 'store/authSlice';

function getLocationTagText() {
  const currentLocation = useLocation().pathname;
  let tagText = '';

  locations.forEach((location) => {
    const match = matchPath(currentLocation, {
      path: location.route
    });

    if (match) {
      tagText = location.name;
    }
  });

  return tagText;
}

export const TopPanel = () => {
  const dispatch = useDispatch();
  const username = useSelector(selectUsername);
  const isLoading = useSelector(selectIsLoading);
  const locationTagText = getLocationTagText();

  // TODO: replace locations tag with breadcrumbs

  return (
    <Styled.TopPanelContainer>
      <LeftPanelOpener />
      <Styled.LocationTag>{locationTagText}</Styled.LocationTag>
      {isLoading ? (
        <Styled.TextRow>loading...</Styled.TextRow>
      ) : (
        <MiniProfile username={username} logout={() => dispatch(logout())} />
      )}
    </Styled.TopPanelContainer>
  );
};
