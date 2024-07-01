import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import { auth } from "./Firebase/FireBaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const User = () => {
  const [user, setUser] = useState(null);

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);

      const signedInUser = result.user;
      console.log(signedInUser);
      setUser(signedInUser);
    } catch (error) {
      console.error("Google Sign-In Failed:", error.message);
    }
  };

  return (
    <div>
      <center>
        {user ? (
          <div>
            <h1>Welcome to homepage</h1>
            <button>Sign Out</button>
          </div>
        ) : (
          <button onClick={handleGoogleSignIn}>Sign In With Google</button>
        )}
      </center>
    </div>
  );
};
export default User;
