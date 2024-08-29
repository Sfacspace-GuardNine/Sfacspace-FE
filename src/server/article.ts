import {
  DocumentData,
  QueryDocumentSnapshot,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAt,
} from "@firebase/firestore";

import { db } from "@/firebase";

const docRef = collection(db, "articles");

export const getHotArticles = async (
  pageSize: number,
  lastVisible: QueryDocumentSnapshot<DocumentData> | null = null,
) => {
  try {
    let q;

    if (lastVisible) {
      q = query(
        docRef,
        orderBy("hot_score", "desc"),
        startAt(lastVisible),
        limit(pageSize),
      );
    } else {
      q = query(docRef, orderBy("hot_score", "desc"), limit(pageSize));
    }

    const docSnapshot = await getDocs(q);
    const lastVisibleDoc =
      docSnapshot.docs[docSnapshot.docs.length - 1] || null;

    return {
      docs: docSnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })),
      last: lastVisibleDoc,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getNewArticles = async (
  pageSize: number,
  lastVisible: QueryDocumentSnapshot<DocumentData> | null = null,
) => {
  try {
    let q;

    if (lastVisible) {
      q = query(
        docRef,
        orderBy("created_at", "desc"),
        startAt(lastVisible),
        limit(pageSize),
      );
    } else {
      q = query(docRef, orderBy("created_at", "desc"), limit(pageSize));
    }

    const docSnapshot = await getDocs(q);
    const lastVisibleDoc =
      docSnapshot.docs[docSnapshot.docs.length - 1] || null;

    return {
      docs: docSnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })),
      last: lastVisibleDoc,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
