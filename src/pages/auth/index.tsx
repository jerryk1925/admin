import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Input, Button } from '../../components/UI';
import { AuthWrapper, AuthForm, AuthLogo } from './auth-styled';

export const Auth: React.FC = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErros] = useState<object | null>(null);
  const history = useHistory();
  const handleName = (event: React.FormEvent<HTMLInputElement>): void => {
    const value = (event.target as HTMLInputElement).value;
    setName(value);
  };
  const handlePassword = (event: React.FormEvent<HTMLInputElement>): void => {
    const value = (event.target as HTMLInputElement).value;
    setPassword(value);
  };
  const submit = (): void => {
    console.log('qwe');
    if (name === 'qwe' && password === 'qwe') {
      history.push('/main');
    } else {
      setErros({
        name: 'errors'
      });
    }
  };
  return (
    <AuthWrapper>
      <AuthForm>
        <AuthLogo>Login</AuthLogo>
        <Input handler={handleName} value={name} placeholder="User Name" />
        <Input
          handler={handlePassword}
          value={password}
          placeholder="Password"
          type="password"
          keyPress={submit}
        />
        <Button click={submit} />
      </AuthForm>
    </AuthWrapper>
  );
};
