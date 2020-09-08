import React from 'react';
import { locations } from 'locations';
import { useLocation, matchPath } from 'react-router-dom';
import { TopPanelContainer, LocationTag, TextRow } from './styled';
import { MiniProfile } from './MiniProfile';
import { LeftPanelOpener } from 'modules/LeftPanelOpener';
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
    <TopPanelContainer>
      <LeftPanelOpener />
      <LocationTag>{locationTagText}</LocationTag>
      {isLoading ? (
        <TextRow>loading...</TextRow>
      ) : (
        <MiniProfile username={username} logout={() => dispatch(logout())} />
      )}
    </TopPanelContainer>
  );
};
