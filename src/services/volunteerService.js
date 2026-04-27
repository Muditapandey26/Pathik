import { db } from './firebase';
import { 
  collection, 
  addDoc, 
  getDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  query, 
  where, 
  serverTimestamp 
} from 'firebase/firestore';

const COLLECTION_NAME = 'volunteers';

/**
 * Records a volunteer's application or assignment to a task
 */
export const assignVolunteerToTask = async (volunteerId, taskId, additionalData = {}) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      volunteerId,
      taskId,
      status: 'assigned', // assigned, completed, withdrawn
      joinedAt: serverTimestamp(),
      ...additionalData
    });
    return docRef.id;
  } catch (error) {
    console.error("Error assigning volunteer to task:", error);
    throw error;
  }
};

/**
 * Fetches all tasks a specific volunteer has joined
 */
export const getVolunteerTasks = async (volunteerId) => {
  try {
    const q = query(
      collection(db, COLLECTION_NAME), 
      where('volunteerId', '==', volunteerId)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching volunteer tasks:", error);
    throw error;
  }
};
