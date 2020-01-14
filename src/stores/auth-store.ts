import { observable, action } from 'mobx';

interface AuthValues {
  username: string;
  email: string;
  password: string;
}

class AuthStore {
  @observable
  inProgress = false;
  @observable
  errors = null;
  @observable
  values: AuthValues = {
    username: 'dssdf',
    email: '',
    password: ''
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
  //
  // @action login() {
  //   this.inProgress = true;
  //   this.errors = undefined;
  //   return agent.Auth.login(this.values.email, this.values.password)
  //     .then(({ user }) => commonStore.setToken(user.token))
  //     .then(() => userStore.pullUser())
  //     .catch(
  //       action(err => {
  //         this.errors =
  //           err.response && err.response.body && err.response.body.errors;
  //         throw err;
  //       })
  //     )
  //     .finally(
  //       action(() => {
  //         this.inProgress = false;
  //       })
  //     );
  // }
  //
  // @action register() {
  //   this.inProgress = true;
  //   this.errors = undefined;
  //   return agent.Auth.register(
  //     this.values.username,
  //     this.values.email,
  //     this.values.password
  //   )
  //     .then(({ user }) => commonStore.setToken(user.token))
  //     .then(() => userStore.pullUser())
  //     .catch(
  //       action(err => {
  //         this.errors =
  //           err.response && err.response.body && err.response.body.errors;
  //         throw err;
  //       })
  //     )
  //     .finally(
  //       action(() => {
  //         this.inProgress = false;
  //       })
  //     );
  // }
  //
  // @action logout() {
  //   commonStore.setToken(undefined);
  //   userStore.forgetUser();
  //   return Promise.resolve();
  // }
}

export const authStore = new AuthStore();
