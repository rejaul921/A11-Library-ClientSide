import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';
export const AuthContext=createContext(null)
const auth= getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const[loading, setLoading]=useState(true)

    const createUser= async (email, password, name, photo)=>{
        setLoading(true);
        const createdUser = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile (createdUser.user, { displayName: name, photoURL: photo })
            .then(() => {
                setUser(createdUser.user);
                setLoading(false);
                console.log(user);
            })
            .catch(() => {
                setLoading(false);
                console.error("Error updating profile:");
                
            });

        return createdUser;
    }

    const provider = new GoogleAuthProvider();
    const GoogleSignin =()=>{
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    const Login=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(()=>{
       const unSub= onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unSub();
        }
    },[])

    const authInfo={
        user,createUser,logOut,Login,GoogleSignin,loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;