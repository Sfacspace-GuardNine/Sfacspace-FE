import { addDoc, collection } from "firebase/firestore";
import { deleteDoc, doc, getDocs, query, where } from "firebase/firestore";

import { db } from "@/firebase";
import { VulnerabilitiesReport, Vulnerability } from "@/type/vulnerability";
import run from "@/utils/llama";

const onScan = async (
  code: string,
  userId: string,
  repoId: string,
  fileId: string,
) => {
  // e: React.FormEvent<HTMLFormElement>
  // e.preventDefault();

  const result: string = await run(code);
  console.log(result);
  const json: VulnerabilitiesReport = JSON.parse(result);
  await onDelete(userId, repoId, fileId);
  try {
    await addDoc(collection(db, "vulnerabilityReport"), {
      userId: userId,
      repoId: repoId,
      fileId: fileId,
      date: new Date(),
      vulnerabilities: json.vulnerabilities,
    });
    return true;
  } catch (error) {
    console.error("Error adding document: ", error);
    return false;
  }
};

const onDelete = async (userId: string, repoId: string, fileId: string) => {
  try {
    // Query the collection to find documents matching the criteria
    const q = query(
      collection(db, "vulnerabilityReport"),
      where("userId", "==", userId),
      where("repoId", "==", repoId),
      where("fileId", "==", fileId),
    );

    // Fetch the documents
    const querySnapshot = await getDocs(q);

    // Iterate through the results and delete each document
    querySnapshot.forEach(async (docSnapshot) => {
      // Get the document reference
      const docRef = doc(db, "vulnerabilityReport", docSnapshot.id);

      // Delete the document
      await deleteDoc(docRef);
    });
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
};

// const onLogOut = async (userId: string) => {
//   try {
//     // Query the collection to find documents matching the criteria
//     const q = query(
//       collection(db, "vulnerabilityReport"),
//       where("userId", "==", userId),
//     );

//     // Fetch the documents
//     const querySnapshot = await getDocs(q);

//     // Iterate through the results and delete each document
//     querySnapshot.forEach(async (docSnapshot) => {
//       // Get the document reference
//       const docRef = doc(db, "vulnerabilityReport", docSnapshot.id);

//       // Delete the document
//       await deleteDoc(docRef);
//     });
//   } catch (error) {
//     console.error("Error deleting document: ", error);
//   }
// };

const onLib = async (userId: string, repoId: string) => {
  try {
    // Query the collection to find documents that match userId, repoId, and fileId
    const q = query(
      collection(db, "vulnerabilityReport"),
      where("userId", "==", userId),
      where("repoId", "==", repoId),
    );

    // Get the documents that match the query
    const querySnapshot = await getDocs(q);
    const files: string[] = [];
    // Iterate through the documents and log the data
    querySnapshot.forEach((docSnapshot) => {
      const data = docSnapshot.data();
      files.push(data.fileId);
    });
    return files;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};

const onFile = async (userId: string, repoId: string, fileId: string) => {
  try {
    // Query the collection to find documents that match userId, repoId, and fileId
    const q = query(
      collection(db, "vulnerabilityReport"),
      where("userId", "==", userId),
      where("repoId", "==", repoId),
      where("fileId", "==", fileId),
    );

    // Get the documents that match the query
    const querySnapshot = await getDocs(q);
    const vulnerabilities: Vulnerability[] = [];

    // Iterate through the documents
    querySnapshot.forEach((docSnapshot) => {
      const data = docSnapshot.data();

      // Ensure data.vulnerabilities exists and is an array
      if (Array.isArray(data.vulnerabilities)) {
        data.vulnerabilities.forEach((vulnerability: Vulnerability) => {
          vulnerabilities.push(vulnerability); // Push each vulnerability to the array
        });
      }
    });
    console.log(vulnerabilities.length);
    return vulnerabilities;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};
export { onScan, onLib, onFile, onDelete };
