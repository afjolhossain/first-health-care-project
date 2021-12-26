import { useEffect, useState } from "react";
import initiliazeAuthentication from "../FIrebase/Firebase/Firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signOut,
} from "firebase/auth";

initiliazeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setauthError] = useState("");

  const googlrProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const auth = getAuth();

  // register Authentication
  const registerUser = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setauthError("");
      })
      .catch((error) => {
        setauthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  //   created login user

  const loginUser = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        navigate(destination);
        setauthError("");
      })
      .catch((error) => {
        setauthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // ****************************
  //          Sign in Google
  // *****************************

  const signInGoogle = () => {
    signInWithPopup(auth, googlrProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setauthError(error.message);
      });
  };

  // ****************************
  //          Sign in FaceBook
  // *****************************

  const signInFacebook = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setauthError(error.message);
      });
  };

  //   onAuthStateChanged means observe user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  //   signOut
  const LogOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .catch((error) => {})
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    registerUser,
    loginUser,
    isLoading,
    authError,
    signInGoogle,
    signInFacebook,
    LogOut,
  };
};
export default useFirebase;
