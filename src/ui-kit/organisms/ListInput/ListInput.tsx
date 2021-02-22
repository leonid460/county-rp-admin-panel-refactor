import React, { useRef, useState } from 'react';
import * as Styled from './styled';
import { ListItem } from './ListItem';
import { IListInputProps } from './types';

export const ListInput = ({ items, setItems }: IListInputProps) => {
  const [input, setInput] = useState('');
  const [itemToHighlight, setItemToHighLight] = useState('');
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const addItemFromInput = () => {
    if (!input) {
      return;
    }

    if (items.includes(input)) {
      setItemToHighLight(input);
      setTimeout(() => {
        scrollRef.current?.scrollIntoView();
      }, 0);
    } else {
      setItems((items) => [...items, input]);
      setInput('');
    }
  };

  const removeItem = (item: string) => {
    const indexOfItem = items.indexOf(item);

    if (indexOfItem === -1) {
      return false;
    }

    const newItemsSet = [...items];

    newItemsSet.splice(items.indexOf(item), 1);

    setItems(newItemsSet);

    return true;
  };

  return (
    <Styled.Container>
      <Styled.InputWrapper>
        <Styled.Input value={input} onChange={(event) => setInput(event.target.value)} />
        <Styled.AddButton onClick={addItemFromInput} type="button">
          <Styled.SvgPlusIcon />
        </Styled.AddButton>
      </Styled.InputWrapper>
      <Styled.ListWrapper>
        {items.map((item) => {
          const isHighlighted = itemToHighlight === item;

          return (
            <ListItem
              key={item}
              handleDelete={() => removeItem(item)}
              isHighlighted={isHighlighted}
              ref={isHighlighted ? scrollRef : undefined}
            >
              {item}
            </ListItem>
          );
        })}
      </Styled.ListWrapper>
    </Styled.Container>
  );
};
