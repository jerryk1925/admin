import { observable, action } from 'mobx';
import db from '../db/income.json'

interface IncomeArrayItem {
    id: number;
    description: string;
    currency: string;
    color: string;
    icon: string;
    budget:number;
    income: number;
}

interface IncomeValues{
    budget: number;
    received: number;
    incomeArray: IncomeArrayItem[];
}

class AuthStore {
    @observable
    inProgress = false;
    @observable
    errors = null;
    @observable
    IncomeValues: IncomeValues = {
        budget: db.budget,
        received: db.received,
        incomeArray: db.incomeArray
    };

    @action
    setUsername(username: string): void {
        this.values.username = username;
    }

    @action
    setEmail(email: string): void {
        this.values.email = email;
    }

    @action
    setPassword(password: string): void {
        this.values.password = password;
    }

    @action
    reset(): void {
        this.values.username = '';
        this.values.email = '';
        this.values.password = '';
    }

}

export const authStore = new AuthStore();
