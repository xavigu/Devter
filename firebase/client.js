import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyC05j0vMGDH-s2Ltw2idXS59AtJ0apUnkA",
  authDomain: "devter-49b51.firebaseapp.com",
  databaseURL: "https://devter-49b51.firebaseio.com",
  projectId: "devter-49b51",
  storageBucket: "devter-49b51.appspot.com",
  messagingSenderId: "493394419637",
  appId: "1:493394419637:web:e2e433d1ea503760cb83fc",
  measurementId: "G-19F2MQ53WD"
};

// si el numero de apps es 0 entonces si se inicializa firebase en caso contrario no lo hace
!firebase.apps.length && firebase.initializeApp(firebaseConfig);

export const loginWithGithub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  return firebase.auth().signInWithPopup(githubProvider)
    .then(user => {
      console.log(user);
      const {aditionalUserInfo} = user;
      const {username, profile} = aditionalUserInfo;
      const {avatar_url, blog} = profile;

      return {
        avatar: avatar_url,
        username,
        url: blog
      }
    }).catch( err => {
      console.log(err);
    });
}