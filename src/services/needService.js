import { db } from './firebase';
import { 
  collection, 
  addDoc, 
  getDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  serverTimestamp 
} from 'firebase/firestore';

const COLLECTION_NAME = 'needs';

/**
 * Creates a new community need report
 */
export const createNeed = async (needData) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...needData,
      status: 'pending', // pending, verified, in-progress, resolved
      createdAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error creating need:", error);
    throw error;
  }
};

/**
 * Fetches all community needs
 */
export const getAllNeeds = async () => {
  try {
    const q = query(collection(db, COLLECTION_NAME), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching needs:", error);
    throw error;
  }
};

/**
 * Fetches a single need by ID
 */
export const getNeedById = async (needId) => {
  try {
    const docRef = doc(db, COLLECTION_NAME, needId);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
  } catch (error) {
    console.error("Error fetching need:", error);
    throw error;
  }
};

/**
 * Updates a community need
 */
export const updateNeed = async (needId, updateData) => {
  try {
    const docRef = doc(db, COLLECTION_NAME, needId);
    await updateDoc(docRef, {
      ...updateData,
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error updating need:", error);
    throw error;
  }
};
