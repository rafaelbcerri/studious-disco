import { Login } from './pages/login/index.js';
import { Signup } from './pages/signup/index.js';
import { Timeline } from './pages/timeline/index.js';

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
window.addEventListener('load', routeRender)

export const onNavigate = (path, state = {}) => {
  window.history.pushState(
    state,
    null,
    window.location.origin + path
  )
  const popStateEvent = new PopStateEvent('popstate', { state: state });
  dispatchEvent(popStateEvent);
}
