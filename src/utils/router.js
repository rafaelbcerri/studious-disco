export const onNavigate = (path, state = {}) => {
  window.history.pushState(
    state,
    null,
    window.location.origin + path
  )
  const popStateEvent = new PopStateEvent('popstate', { state: state });
  dispatchEvent(popStateEvent);
}
