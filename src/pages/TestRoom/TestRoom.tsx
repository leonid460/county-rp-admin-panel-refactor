import React, { useEffect, useState } from 'react';
import { Base } from 'ui-kit/templates';
import { Input, withLabel, PrimaryButton, CloseButton, Range } from 'ui-kit/atoms';
import { IInputProps } from 'ui-kit/atoms/Input/types';
import { CheckboxWithLabel } from 'ui-kit/molecules';
import { PopUpColorPicker, ModalWindow, Search, ListInputWithLabel } from 'ui-kit/organisms';
import * as Styled from './styled';
import { getGroupsFilterBy as originalGetGroupsFilterBy } from 'api';
import { IFilterByResponse } from '../../types';

const InputWithLabel = withLabel<IInputProps>(Input);

interface IFilterByAdaptorParams<T extends object, R> {
  initData: T;
  mainParamKey: keyof T;
  nameParamKey: keyof R;
  valueParamKey: keyof R;
}

function adaptFilterBy<T extends object, R>(
  filterByFunction: (page: number, data: T) => Promise<IFilterByResponse<R>>,
  { initData, mainParamKey, nameParamKey, valueParamKey }: IFilterByAdaptorParams<T, R>
) {
  return async function (page: number, query: string) {
    const queryObj: T = { ...initData, [mainParamKey]: query };
    const result = await filterByFunction(page, queryObj);
    const { maxPage, allAmount, page: currentPage, items } = result;

    return {
      items: items.map((item) => ({ name: item[nameParamKey], value: item[valueParamKey] })),
      maxPage,
      allAmount,
      page: currentPage
    };
  };
}

export const TestRoom = () => {
  const [checked, setChecked] = useState(false);
  const [input, setInput] = useState('');
  const [range, setRange] = useState(100);
  const [min, max] = [0, 100];
  const [color, setColor] = useState('#d3adeb');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];
  const [group, setGroup] = useState<{ name: string; value: string } | null>(null);
  const getGroupsFilterBy = adaptFilterBy(originalGetGroupsFilterBy, {
    initData: {
      name: ''
    },
    mainParamKey: 'name',
    nameParamKey: 'name',
    valueParamKey: 'id'
  });

  const [listItems, setListItems] = useState<string[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const items = ['item-1', 'item-2', 'item-3', 'item-4'];

      setListItems(items);
    }, 40);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Base>
      <Styled.Container>
        <CheckboxWithLabel label="Checkbox" value={checked} setValue={setChecked} />
        <InputWithLabel label="Test" value={input} setValue={setInput} />
        <Range min={min} max={max} value={range} setValue={setRange} />
        <PopUpColorPicker value={color} setValue={setColor} />
        <>
          <PrimaryButton onClick={() => setModalIsOpen(true)}>Open Modal</PrimaryButton>
          <ModalWindow shouldShow={modalIsOpen} hide={() => setModalIsOpen(false)}>
            {colors.map((color) => (
              <Styled.ColorBlock key={color} color={color} />
            ))}
          </ModalWindow>
        </>
        <CloseButton />
        <Search getFilterBy={getGroupsFilterBy} currentItem={group} setCurrentItem={setGroup} />
        <ListInputWithLabel label="list" items={listItems} setItems={setListItems} />
      </Styled.Container>
    </Base>
  );
};
