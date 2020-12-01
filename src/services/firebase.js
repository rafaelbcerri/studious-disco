export const login = (email, password) => (
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
)