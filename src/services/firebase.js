export const login = (email, password) => (
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
);

export const signup = (email, password) => (
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
);

export const getPosts = () => (
  firebase
    .firestore()
    .collection('posts')
    .get()
);
