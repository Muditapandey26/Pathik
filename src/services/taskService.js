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

const COLLECTION_NAME = 'tasks';

/**
 * Creates a new task (typically by an NGO)
 */
export const createTask = async (taskData) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...taskData,
      status: 'open', // open, assigned, completed, cancelled
      createdAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
};

/**
 * Fetches tasks created by a specific NGO
 */
export const getNgoTasks = async (ngoId) => {
  try {
    const q = query(
      collection(db, COLLECTION_NAME), 
      where('ngoId', '==', ngoId),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching NGO tasks:", error);
    throw error;
  }
};

/**
 * Fetches all open tasks for volunteers
 */
export const getOpenTasks = async () => {
  try {
    const q = query(
      collection(db, COLLECTION_NAME), 
      where('status', '==', 'open'),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching open tasks:", error);
    throw error;
  }
};

/**
 * Updates a task status or details
 */
export const updateTask = async (taskId, updateData) => {
  try {
    const docRef = doc(db, COLLECTION_NAME, taskId);
    await updateDoc(docRef, {
      ...updateData,
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};
