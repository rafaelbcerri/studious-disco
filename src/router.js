import { Login } from './pages/login/index.js';
import { Signup } from './pages/signup/index.js';

const rootDiv = document.getElementById('root');

export const onNavigate = (path) => {
  window.history.pushState(
    {},
    null,
    window.location.origin + path
  )
}

const routes = {
  '/' : Login(),
  '/signup': Signup(),
};

document.getElementById('login-link').addEventListener('click', () => {
  onNavigate('/')
})
document.getElementById('signup-link').addEventListener('click', () => {
  onNavigate('/signup')
})


window.onpopstate = () => {
  rootDiv.innerHTML = '';
  rootDiv.appendChild(routes[window.location.pathname]);
}

window.onpopstate();
