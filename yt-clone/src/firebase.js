import firebase from "firebase/app";
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC5azdTBJbJT_g22_wYRlKO6LthdBGBdtA",
  authDomain: "yt-clone-re.firebaseapp.com",
  projectId: "yt-clone-re",
  storageBucket: "yt-clone-re.appspot.com",
  messagingSenderId: "423037878777",
  appId: "1:423037878777:web:24062c8119ad077e443d28",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth()
