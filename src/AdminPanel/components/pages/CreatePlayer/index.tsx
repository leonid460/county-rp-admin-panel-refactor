import React, {useState, useEffect} from 'react';
import {useHistory, NavLink} from 'react-router-dom';
import styled from 'styled-components';
import BlueButton from 'AdminPanel/components/atoms/BlueButton';
import Input from 'AdminPanel/components/atoms/Input';
import EditPage from 'AdminPanel/components/templates/Edit';
import {createPlayer} from 'AdminPanel/services';
import {getGroupsFilterBy} from 'AdminPanel/services';
import {routes} from 'AdminPanel/routes';
import {Group} from 'AdminPanel/types';
import {handlerFactory} from 'AdminPanel/utils/handlerFactory';


const BlueButtonWithMargin = styled(BlueButton)`
  margin-left: 10px;
`;

export default () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [groups, setGroups] = useState([] as Group[]);
  const [groupId, setGroupId] = useState('');
  const history = useHistory();
  const prevLocation = routes.players;

  const handleCreate = handlerFactory(
      () => createPlayer(username, password, groupId),
      () => history.push(prevLocation)
  );

  const fetchGroups = async () => {
    try {
      const fetchResult = await getGroupsFilterBy();

      if (fetchResult.items.length !== 0) {
        setGroups(fetchResult.items);
        setGroupId(fetchResult.items[0].id);
      }
    } catch (error) {
      console.dir(error);
    }
  };

  useEffect(() => {
    fetchGroups();
  }, []);


  return (
    <EditPage
      pageName='Создать'
      inputRows={[
        {
          name: 'Логин  ',
          innerElement: <Input value={username} setValue={setUsername} />,
        },
        {
          name: 'Пароль',
          innerElement: <Input value={password} setValue={setPassword} />,
        },
        {
          name: 'Группа',
          innerElement: <select>
            {
              groups.map((group, key) => <option key={key} value={group.id}>{group.name}</option>)
            }
          </select>,

        },
      ]}
      buttons={
        <>
          <BlueButton as={NavLink} to={prevLocation}>
              Отмена
          </BlueButton>
          <BlueButtonWithMargin onClick={handleCreate}>
              Создать
          </BlueButtonWithMargin>
        </>
      }
    />
  );
};
