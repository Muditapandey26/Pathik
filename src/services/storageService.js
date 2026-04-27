import { storage } from './firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

/**
 * Uploads a file to Firebase Storage and returns the public download URL.
 * 
 * @param {File} file - The file object from an input element
 * @param {string} folder - Target folder ('tasks', 'needs', 'reports', etc.)
 * @returns {Promise<string>} The download URL for the uploaded file
 */
export const uploadFile = async (file, folder) => {
  if (!file) return null;

  // Create a unique filename using timestamp and original name
  const fileName = `${Date.now()}_${file.name}`;
  const storageRef = ref(storage, `${folder}/${fileName}`);

  try {
    // Upload the file
    const snapshot = await uploadBytes(storageRef, file);
    
    // Get and return the download URL
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error(`Error uploading file to ${folder}:`, error);
    throw error;
  }
};

/**
 * Specialized helper for task attachments
 */
export const uploadTaskAttachment = (file) => uploadFile(file, 'tasks');

/**
 * Specialized helper for need report evidence (images/docs)
 */
export const uploadNeedEvidence = (file) => uploadFile(file, 'needs');

/**
 * Specialized helper for impact reports
 */
export const uploadImpactReport = (file) => uploadFile(file, 'reports');
