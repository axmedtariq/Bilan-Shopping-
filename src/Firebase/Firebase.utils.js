import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";


const config = {
	apiKey: "AIzaSyBoJt4Xdc2UDX_nOVL-twqKCev6lcBc-DU",
  authDomain: "bilanshopping.firebaseapp.com",
  projectId: "bilanshopping",
  storageBucket: "bilanshopping.appspot.com",
  messagingSenderId: "1093906803586",
  appId: "1:1093906803586:web:d551be3b160ed9b140bd9b",
  measurementId: "G-V732KRC4E5"
};
    

export const createUserProfileDocument = async (userAuth, additionalData) => {


    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists) {

        const{ displayName, email } = userAuth;
        const createdAt = new Date();

        try{

            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        }catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}


firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;