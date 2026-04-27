import { db } from './firebase';
import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  serverTimestamp 
} from 'firebase/firestore';

const COLLECTION_NAME = 'reports';

/**
 * Submits a new crisis or impact report
 */
export const createReport = async (reportData) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...reportData,
      createdAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error creating report:", error);
    throw error;
  }
};

/**
 * Fetches all reports
 */
export const getAllReports = async () => {
  try {
    const q = query(collection(db, COLLECTION_NAME), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching reports:", error);
    throw error;
  }
};
