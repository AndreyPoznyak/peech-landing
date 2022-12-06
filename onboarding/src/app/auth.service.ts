import { Injectable } from '@angular/core';
import { GoogleAuthProvider, getAuth, signInWithPopup, AuthProvider, FacebookAuthProvider, OAuthProvider } from '@firebase/auth';
import { initializeApp, FirebaseOptions } from '@firebase/app';

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyD5ClyeP0iWEm_IPanMVULE6YFkjOYehek",
  //authDomain: 'peechapp.co'
  authDomain: "voiceservice-217021.firebaseapp.com",
};

export type AuthProviderType = 'facebook' | 'google' | 'apple';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  async login(type: AuthProviderType): Promise<any> {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const provider = this.getProvider(type);

    auth.useDeviceLanguage();

    try {
      const result = await signInWithPopup(auth, provider);
      //const credential = GoogleAuthProvider.credentialFromResult(result);
      //const token = credential?.accessToken;
      const user = result.user;

      return user;
    } catch (error) {
      //const credential = GoogleAuthProvider.credentialFromError(error);

      console.log(error);
    }
  }

  private getProvider(type: AuthProviderType): AuthProvider {
    let provider;

    switch (type) {
      case 'apple':
        provider = new OAuthProvider('apple.com');
        provider.addScope('email');
        provider.addScope('name');
        break;
      case 'facebook':
        provider = new FacebookAuthProvider();
        provider.addScope('email');
        provider.addScope('public_profile');
        break;
      case 'google':
        provider = new GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/user.emails.read'); //https://developers.google.com/identity/protocols/oauth2/scopes#people
        break;
    }

    return provider;
  }
}
