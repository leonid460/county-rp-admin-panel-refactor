import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from 'stores';
import { locations } from 'locations';
import { useLocation, matchPath } from 'react-router-dom';
import { TopPanelContainer, LocationTag, TextRow } from './styled';
import { MiniProfile } from './MiniProfile';

function getLocationTagText() {
  const currentLocation = useLocation().pathname;

  let tagText = '';

  locations.forEach((location) => {
    const match = matchPath(currentLocation, {
      path: location.route
    });

    if (match) tagText = location.name;
  });

  return tagText;
}

export const TopPanel = observer(() => {
  const { authStore } = useStore();
  const locationTagText = getLocationTagText();

  // TODO: replace locations tag with breadcrumbs

  return (
    <TopPanelContainer>
      <LocationTag>{locationTagText}</LocationTag>
      {authStore.isLoading ? (
        <TextRow>loading...</TextRow>
      ) : (
        <MiniProfile username={authStore.username} logout={authStore.logout} />
      )}
    </TopPanelContainer>
  );
});
