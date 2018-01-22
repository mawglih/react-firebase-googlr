import { auth } from './firebase';
import { provider } from './firebase';


export const doSignIn = () => auth.signInWithPopup(provider);
export const doSignOut = () => auth.signOut();
export const doOnStateChange = (user) => auth.onAuthStateChanged(user);