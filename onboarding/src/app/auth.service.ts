import { Injectable } from '@angular/core';
import { GoogleAuthProvider, getAuth, signInWithPopup } from '@firebase/auth';
import { initializeApp, FirebaseOptions } from '@firebase/app';

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyD5ClyeP0iWEm_IPanMVULE6YFkjOYehek",
  //authDomain: 'peechapp.co'
  authDomain: "voiceservice-217021.firebaseapp.com",
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  async loginGoogle(): Promise<any> {
    const app = initializeApp(firebaseConfig);
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    auth.useDeviceLanguage();

    provider.addScope('https://www.googleapis.com/auth/user.emails.read'); //https://developers.google.com/identity/protocols/oauth2/scopes#people

    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;

      return user;
    } catch (error) {
      //const credential = GoogleAuthProvider.credentialFromError(error);

      console.log(error);
    }
  }
}
