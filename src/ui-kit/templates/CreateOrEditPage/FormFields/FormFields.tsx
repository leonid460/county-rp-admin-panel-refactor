import React from 'react';
import { InputWithLabel } from 'ui-kit/molecules';
import { SelectWithLabel } from 'ui-kit/molecules';
import * as Styled from './styled';
import { IFormFieldsProps, IFormField } from './types';

export const FormFields = ({ fields }: IFormFieldsProps) => {
  const renderField = (field: IFormField<unknown>) => {
    switch (field.type) {
      case 'text':
        return (
          <InputWithLabel
            label={field.name}
            key={field.name}
            value={field.value as string}
            setValue={field.setValue}
          />
        );
      case 'select':
        return (
          <SelectWithLabel
            label={field.name}
            key={field.name}
            options={field.options}
            value={field.value as string}
            setValue={field.setValue}
          />
        );
      default:
        return <></>;
    }
  };

  return (
    <Styled.FormFieldsWrapper>{fields.map((field) => renderField(field))}</Styled.FormFieldsWrapper>
  );
};
