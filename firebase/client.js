import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC05j0vMGDH-s2Ltw2idXS59AtJ0apUnkA",
  authDomain: "devter-49b51.firebaseapp.com",
  databaseURL: "https://devter-49b51.firebaseio.com",
  projectId: "devter-49b51",
  storageBucket: "devter-49b51.appspot.com",
  messagingSenderId: "493394419637",
  appId: "1:493394419637:web:e2e433d1ea503760cb83fc",
  measurementId: "G-19F2MQ53WD",
};

// si el numero de apps es 0 entonces si se inicializa firebase en caso contrario no lo hace
!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL, uid } = user;

  return {
    avatar: photoURL,
    username: displayName,
    email,
    uid,
  };
};

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    console.log("user change: ", user);
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null;
    onChange(normalizedUser);
  });
};

export const loginWithGithub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  return firebase.auth().signInWithPopup(githubProvider);
};

export const addDevit = ({ avatar, content, userId, userName }) => {
  return db.collection("devits").add({
    avatar,
    content,
    userId,
    userName,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    likesCount: 0,
    sharedCount: 0,
  });
};
