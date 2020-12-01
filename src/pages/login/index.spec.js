import * as Firebase from '../../services/firebase.js';
import { Login } from './index.js';

describe('Login', () => {
  beforeEach(() => {
    Firebase.login = jest.fn(() => Promise.resolve(true));
  })

  afterEach(() => {
    jest.clearAllMocks();
  })

  it('should be a function', () => {
    expect(typeof Login).toBe('function');
  });

  it('should render the page', () => {
    expect(Login()).toMatchSnapshot();
  })

  it('should submit login with email and password', () => {
    const loginEl = Login();

    loginEl.querySelector('#email').value = 'email@example.com';
    loginEl.querySelector('#password').value = '123123';

    const loginForm = loginEl.querySelector('#login-form');
    loginForm.dispatchEvent(new Event('submit'));

    expect(Firebase.login).toHaveBeenCalledWith("email@example.com", "123123");
  })
});
