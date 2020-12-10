import { login } from '../../services/firebase.js';
import { onNavigate } from '../../utils/router.js';

export const Login = () => {
  const rootElement = document.createElement('div');

  rootElement.innerHTML = `
    <div>
      <h1>Login</h1>
      <form id='login-form'>
        <input id='email' type='email'/>
        <input id='password' type='password'/>
        <button> Entrar </button>
      </form>
    </div>
  `;

  const loginForm = rootElement.querySelector('#login-form');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = rootElement.querySelector('#email').value;
    const password = rootElement.querySelector('#password').value;

    login(email, password)
      .then(() => onNavigate('/timeline'))
  });

  return rootElement;
};
