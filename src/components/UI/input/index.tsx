import React from 'react';
import { FormControl, FormGroup, FormLabel } from './input-styled';

interface InputProps {
  type?: string;
  value?: string;
  handler(event: React.FormEvent<HTMLInputElement>): void;
  placeholder?: string;
  name?: string;
  keyPress?: () => void;
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  value = '',
  handler,
  placeholder = 'Placeholder',
  name,
  keyPress
}) => {
  return (
    <FormGroup>
      <FormLabel htmlFor={name}>
        <FormControl
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={handler}
          name={name}
          id={name}
          onKeyPress={keyPress}
        />
      </FormLabel>
    </FormGroup>
  );
};
