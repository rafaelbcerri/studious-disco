import { signup } from '../../services/firebase.js';
import { onNavigate } from '../../utils/router.js';

export const Signup = () => {
  const rootElement = document.createElement('div');

  rootElement.innerHTML = `
    <div>
      <h1>Signup</h1>
      <form id='signup-form'>
        <input id='email' type='email'/>
        <input id='password' type='password'/>
        <button> Cadastrar </button>
      </form>
    </div>
  `;

  const signupForm = rootElement.querySelector('#signup-form');

  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = rootElement.querySelector('#email').value;
    const password = rootElement.querySelector('#password').value;

    signup(email, password)
      .then(() => onNavigate('/timeline'))
  })

  return rootElement;
};
