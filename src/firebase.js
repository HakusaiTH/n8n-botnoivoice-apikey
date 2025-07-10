// src/lib/firebase.ts
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  getAdditionalUserInfo
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export const handleGoogleLogin = async () => {
  console.log('🔔 handleGoogleLogin called');
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log('✅ UserCredential:', result);
    console.log('👤 user:', result.user);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    console.log('🔑 credential:', credential);
    console.log('🔄 operationType:', result.operationType);
    const additionalUserInfo = getAdditionalUserInfo(result);
    console.log('📄 additionalUserInfo:', additionalUserInfo);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData?.email;
    const credential = GoogleAuthProvider.credentialFromError(error);

    console.error('❌ Google login error:', {
      errorCode,
      errorMessage,
      email,
      credential
    });

    throw error;
  }
};

// export { auth, googleProvider };