import { AuthCredential, FacebookAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import auth from './firebase.config';




export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();

const AuthProvider = ({ children }) => {

const [user, setUser] = useState();
const [loading, setLoading] = useState(true);

    const googleSignIN = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const facebookSignIN = () => {
        setLoading(true);
        return signInWithPopup(auth, facebookProvider);
    }
    const twitterSignIN = () => {
        setLoading(true);
        return signInWithPopup(auth, twitterProvider);
    }

    const signUp = async (email, password, username, photoUrl) => {
        try {
          setLoading(true);
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
      
          // Update user profile with username and photo URL
          await updateProfile(user, { displayName: username, photoURL: photoUrl });
      
          setLoading(false);
      
          return user;
        } catch (error) {
          setLoading(false);
          throw error;
        }
      };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const singOut = () => {
        setLoading(true);
        return signOut(auth)
    }
// onAuthStateChanged

useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
       setUser(currentUser);
       setLoading(false);
   });
   return () =>{
    return unsubscribe();

   } 
},[])



    const AuthInfo = {
        googleSignIN,
        facebookSignIN,
        twitterSignIN,
        signUp,
        signIn,
        singOut,
        user,
        loading
    }


    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider