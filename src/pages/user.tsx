import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";

export default function User() {
  const [user, setUser] = useState<any | null>(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user == null) {
        setUser(null);
      } else {
        setUser(user?.uid);
      }
    });
  }, [setUser]);

  function googleSignIn() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }

  function logOut() {
    signOut(auth);
  }

  return (
    <div>
      {!user ? (
        <button onClick={googleSignIn}>Login</button>
      ) : (
        <button onClick={logOut}>Logout</button>
      )}
    </div>
  );
}
