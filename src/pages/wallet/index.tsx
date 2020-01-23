import React from 'react';
import { Income } from './components/income';
import { Accounts } from './components/accounts';
import { Expenses } from './components/expenses';

export const Wallet = () => {
  return (
    <div>
      <div>
        <Income />
        <Accounts />
        <Expenses />
      </div>
      <div></div>
    </div>
  );
};
