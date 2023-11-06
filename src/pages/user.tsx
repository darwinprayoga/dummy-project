import { useContext, createContext, useState, useEffect } from "react";
import {
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase";

const { user, googleSignIn, logOut } = UserAuth();

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    };

    const logOut = () => {
        signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, [user]);

    return (
        <AuthContext.Provider value={{ user, googleSignIn, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

const UserAuth = () => {
    return useContext(AuthContext);
};

const handleSignIn = async () => {
    try {
        await googleSignIn();
    } catch (error) {
        console.log(error);
    }
};

const handleSignOut = async () => {
    try {
        await logOut();
    } catch (error) {
        console.log(error);
    }
};
export default function User() {
    return (
        <div>
            <button onClick={handleSignIn} className="p-2 cursor-pointer">Login</button>
            <button onClick={handleSignOut} className="cursor-pointer" >Logout</button>
        </div>
    )
}
