import React, { useState } from 'react';
import { Input, Button } from '../../components/UI';
import { AuthWrapper, AuthForm, AuthLogo } from './auth-styled';

export const Auth: React.FC = () => {
  const [name, setName] = useState('');
  const handle = (event: React.FormEvent<HTMLInputElement>): void => {
    const value = (event.target as HTMLInputElement).value;
    setName(value);
  };
  return (
    <AuthWrapper>
      <AuthForm>
        <AuthLogo>Login</AuthLogo>
        <Input handler={handle} value={name} />
        <Input handler={handle} value={name} />
        <Input handler={handle} value={name} />
        <Button></Button>
      </AuthForm>
    </AuthWrapper>
  );
};
