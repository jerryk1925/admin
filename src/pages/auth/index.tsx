import React, { useState } from 'react';
import { Input } from '../../components/UI';
import { AuthWrapper, AuthForm } from './auth-styled';

export const Auth: React.FC = () => {
  const [name, setName] = useState('');
  const handle = (event: React.FormEvent<HTMLInputElement>): void => {
    const value = (event.target as HTMLInputElement).value;
    setName(value);
  };
  return (
    <AuthWrapper>
      <AuthForm>
        <div>Logo</div>
        <Input handler={handle} value={name} />
      </AuthForm>
    </AuthWrapper>
  );
};
