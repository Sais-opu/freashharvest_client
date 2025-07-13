

import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";



export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = async (email, password, userDetails) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            const newUser = userCredential.user;

            await updateProfile(newUser, {
                displayName: userDetails.displayName,
                photoURL: userDetails.photoURL,
            });

            const updatedUser = {
                ...newUser,
                displayName: userDetails.displayName,
                photoURL: userDetails.photoURL,
            };

            setUser(updatedUser);
            localStorage.setItem("userProfile", JSON.stringify(updatedUser));
            return newUser;
        } catch (error) {
            console.error("Error creating user:", error.message);
            throw error;
        }
    };

    const updateUserProfile = async (updatedUser) => {
        try {
            if (auth.currentUser) {
                await updateProfile(auth.currentUser, {
                    displayName: updatedUser.displayName,
                    photoURL: updatedUser.photoURL,
                });

                const updatedProfile = {
                    ...auth.currentUser,
                    displayName: updatedUser.displayName,
                    photoURL: updatedUser.photoURL,
                };

                setUser(updatedProfile);
                localStorage.setItem("userProfile", JSON.stringify(updatedProfile));
            }
        } catch (error) {
            console.error("Error updating profile:", error.message);
            throw error;
        }
    };

    const signOutUser = async () => {
        try {
            await signOut(auth);
            setUser(null);
            localStorage.removeItem("userProfile");
        } catch (error) {
            console.error("Sign-out error:", error.message);
        }
    };

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            setUser(user);
            localStorage.setItem("userProfile", JSON.stringify(user));
            return user;
        } catch (error) {
            console.error("Google Sign-In error:", error.message);
            throw error;
        }
    };

    const signInUser = async (email, password) => {
        return await signInWithEmailAndPassword(auth, email, password);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                localStorage.setItem("userProfile", JSON.stringify(currentUser));
            } else {
                setUser(null);
                localStorage.removeItem("userProfile");
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                createUser,
                signInUser,
                signOutUser,
                signInWithGoogle,
                updateUserProfile,
            }}
        >
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;