import styled from 'styled-components';
import { SvgPlusIcon as OriginalSvgPlusIcon } from './SvgPlusIcon';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 7px;
  overflow: hidden;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 38px;
  width: 100%;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
`;

export const Input = styled.input`
  height: 100%;
  flex-grow: 1;
  border-radius: 0;
  outline: none;
  border: none;
  padding-left: 8px;
  box-sizing: border-box;
  color: black;
`;

export const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 100%;
  padding: 0;
  border: none;
  outline: none;
  background: ${({ theme }) => theme.colors.primaryButton.background};
  color: ${({ theme }) => theme.colors.primaryButton.color};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryButton.hoverBackground};
    color: ${({ theme }) => theme.colors.primaryButton.hoverColor};
  }
`;

export const SvgPlusIcon = styled(OriginalSvgPlusIcon)`
  width: 30px;
  height: 30px;

  path {
    fill: white;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  max-height: 300px;
  min-height: 10px;
  padding-left: 4px;
  padding-top: 4px;
  overflow: auto;
  background: white;
  transition: height 0.4s ease;
  scroll-behavior: smooth;
`;
