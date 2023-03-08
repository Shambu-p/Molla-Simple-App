import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyChnyqWZyQBW_O0W5J-T6aqAH1kbS1cKw0",
    authDomain: "techethio-5b9eb.firebaseapp.com",
    projectId: "techethio-5b9eb",
    storageBucket: "techethio-5b9eb.appspot.com",
    messagingSenderId: "539348362844",
    appId: "1:539348362844:web:3e77427f3abc9f667fa899"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
