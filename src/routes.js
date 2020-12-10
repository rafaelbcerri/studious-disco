import { Login } from './pages/login/index.js';
import { Signup } from './pages/signup/index.js';
import { Timeline } from './pages/timeline/index.js';
import { onNavigate } from './utils/router.js';

const routeRender = () => {
  const rootDiv = document.getElementById('root');
  const routes = {
    '/' : Login,
    '/signup': Signup,
    '/timeline': Timeline,
  };

  rootDiv.innerHTML = '';
  rootDiv.appendChild(routes[window.location.pathname]());
}

window.addEventListener('popstate', routeRender)
window.addEventListener('load', () => {
  document
    .getElementById('login-link')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/')
    })
  document
    .getElementById('signup-link')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/signup')
    })
  document
    .getElementById('timeline-link')
    .addEventListener('click', (e) => {
      e.preventDefault()
      onNavigate('/timeline')
    })

  routeRender()
})
