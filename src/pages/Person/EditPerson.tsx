import React, { useEffect, useState } from 'react';
import { editPerson, getPerson } from 'api';
import { CreateOrEditPage } from 'ui-kit/templates';
import { person } from 'routes';
import { useHistory } from 'react-router-dom';
import { getEntityIdFromUrl, of } from 'utils';
import { InputWithLabel } from 'ui-kit/molecules';

function useDataProvider() {
  const history = useHistory();
  const pathName = history.location.pathname;

  const id = Number(getEntityIdFromUrl(pathName));
  const [name, setName] = useState('');
  const [playerId, setPlayerId] = useState(NaN);
  const [regDate, setRegDate] = useState('');
  const [lastDate, setLastDate] = useState('');
  const [adminLevelId, setAdminLevelId] = useState('');
  const [factionId, setFactionId] = useState('');
  const [groupId, setGroupId] = useState(NaN);
  const [leader, setLeader] = useState(false);
  const [rank, setRank] = useState(0);
  const [position, setPosition] = useState<number[]>([]);

  const [asyncCallError, setAsyncCallError] = useState('');

  const handleSubmit = async () => {
    const personData = {
      id,
      name,
      playerId,
      regDate,
      lastDate,
      adminLevelId,
      factionId,
      groupId,
      leader,
      rank,
      position
    };

    const { error } = await of(editPerson(personData));

    if (error) {
      setAsyncCallError(error.message);
    } else {
      setAsyncCallError('');
      handleGoBack();
    }
  };

  const handleGoBack = () => {
    history.push(person);
  };

  useEffect(() => {
    (async () => {
      const personResult = await of(getPerson(id));

      if (personResult.error) {
        setAsyncCallError(personResult.error.message);

        return;
      }

      const { data: personData } = personResult;

      setName(personData.name);
      setPlayerId(personData.playerId);
      setRegDate(personData.regDate);
      setLastDate(personData.lastDate);
      setAdminLevelId(personData.adminLevelId);
      setFactionId(personData.factionId);
      setLeader(personData.leader);
      setRank(personData.rank);
      setPosition(personData.position);
      setGroupId(Number(personData.groupId));
    })();
  }, [id]);

  return {
    name,
    setName,
    adminLevelId,
    setAdminLevelId,
    factionId,
    setFactionId,
    groupId,
    setGroupId,
    handleSubmit,
    handleGoBack,
    asyncCallError
  };
}

export const EditPerson = () => {
  const {
    name,
    setName,
    adminLevelId,
    setAdminLevelId,
    factionId,
    setFactionId,
    groupId,
    setGroupId,
    handleSubmit,
    handleGoBack,
    asyncCallError
  } = useDataProvider();

  return (
    <CreateOrEditPage
      type="edit"
      handleGoBack={handleGoBack}
      handleSubmit={handleSubmit}
      asyncCallError={asyncCallError}
    >
      <InputWithLabel label="имя" value={name} setValue={setName} />
      <InputWithLabel label="adminLevelId" value={adminLevelId} setValue={setAdminLevelId} />
      <InputWithLabel label="id фракции" value={factionId} setValue={setFactionId} />
      <InputWithLabel label="Id банды" value={groupId} setValue={setGroupId} type="number" />
    </CreateOrEditPage>
  );
};
