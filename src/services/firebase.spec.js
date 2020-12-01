import { login } from './firebase.js';

describe('login', () => {
  it('should be a function', () => {
    expect(typeof login).toBe('function');
  });
  it('should call firebase', () => {
    login('email', 'password');
    expect(firebase.auth).toBeCalled();
  });
});
