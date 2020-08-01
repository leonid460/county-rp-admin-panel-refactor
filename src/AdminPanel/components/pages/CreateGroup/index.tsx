import React, {useState} from 'react';
import {useHistory, NavLink} from 'react-router-dom';
import styled from 'styled-components';
import BlueButton from 'AdminPanel/components/atoms/BlueButton';
import Input from 'AdminPanel/components/atoms/Input';
import ColorPalette from 'AdminPanel/components/molecules/ColorPalette';
import Checkbox from 'AdminPanel/components/molecules/Checkbox';
import EditPage from 'AdminPanel/components/templates/Edit';
import {createGroup} from 'AdminPanel/services/group/createGroup';
import {routes} from 'AdminPanel/routes';
import {handlerFactory} from 'AdminPanel/utils/handlerFactory';

const BlueButtonWithMargin = styled(BlueButton)`
  margin-left: 10px;
`;

export default () => {
  const [groupId, setGroupId] = useState('');
  const [groupName, setGroupName] = useState('');
  const [color, setColor] = useState('');
  const [rights, setRights] = useState(false);
  const history = useHistory();
  const prevLocation = routes.group;

  const handleCreate = handlerFactory(
    () => createGroup(groupId, groupName, color),
    () => history.push(prevLocation)
  );

  return (
    <EditPage
      pageName="Создать"
      inputRows={[
        {
          name: 'ID',
          innerElement: <Input value={groupId} setValue={setGroupId} />,
        },
        {
          name: 'Имя Группы',
          innerElement: <Input value={groupName} setValue={setGroupName} />,
        },
        {
          name: 'Цвет',
          innerElement: (
            <>
              <Input value={color} setValue={setColor} color={color} />
              <ColorPalette setColor={setColor} />
            </>
          ),
        },
        {
          name: 'Права На АдминПанель',
          innerElement: (
            <Checkbox
              checked={rights}
              id="rights"
              handleCheck={() => setRights(!rights)}
            />
          ),
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
