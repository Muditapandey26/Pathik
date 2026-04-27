import { db } from './firebase';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';

/**
 * Creates a user profile document in Firestore
 * @param {string} uid - The Firebase Auth UID
 * @param {object} profileData - The profile information
 */
export const createUserProfile = async (uid, profileData) => {
  if (!uid) return;

  const userRef = doc(db, 'users', uid);
  
  const data = {
    ...profileData,
    createdAt: serverTimestamp(),
  };

  try {
    await setDoc(userRef, data);
    console.log("User profile created in Firestore for UID:", uid);
  } catch (error) {
    console.error("Error creating user profile:", error);
    throw error;
  }
};

/**
 * Fetches a user profile document from Firestore
 * @param {string} uid - The Firebase Auth UID
 * @returns {Promise<object|null>} The user profile data or null
 */
export const getUserProfile = async (uid) => {
  if (!uid) return null;

  const userRef = doc(db, 'users', uid);
  try {
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      return userSnap.data();
    }
    return null;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
};
