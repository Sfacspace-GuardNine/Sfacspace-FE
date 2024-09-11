import {
  DocumentData,
  QueryDocumentSnapshot,
  collection,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  runTransaction,
  startAfter,
} from "@firebase/firestore";
import dayjs from "dayjs";
import { serverTimestamp } from "firebase/firestore";

import { db } from "@/firebase";

export const getHotArticles = async (
  pageSize: number,
  lastVisible: QueryDocumentSnapshot<DocumentData> | null = null,
) => {
  try {
    const docRef = collection(db, "articles");
    const docSnap = await getDocs(docRef);
    let q;

    if (lastVisible) {
      q = query(
        docRef,
        orderBy("hot_score", "desc"),
        startAfter(lastVisible),
        limit(pageSize),
      );
    } else {
      q = query(docRef, orderBy("hot_score", "desc"), limit(pageSize));
    }

    const querySnap = await getDocs(q);
    const lastVisibleDoc = querySnap.docs[querySnap.docs.length - 1] || null;

    return {
      docs: querySnap.docs.map((doc) => ({ id: doc.id, data: doc.data() })),
      last: lastVisibleDoc,
      total: docSnap.docs.length,
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
    const docRef = collection(db, "articles");
    const docSnap = await getDocs(docRef);
    let q;

    if (lastVisible) {
      q = query(
        docRef,
        orderBy("created_at", "desc"),
        startAfter(lastVisible),
        limit(pageSize),
      );
    } else {
      q = query(docRef, orderBy("created_at", "desc"), limit(pageSize));
    }

    const querySnap = await getDocs(q);
    const lastVisibleDoc = querySnap.docs[querySnap.docs.length - 1] || null;

    return {
      docs: querySnap.docs.map((doc) => ({ id: doc.id, data: doc.data() })),
      last: lastVisibleDoc,
      total: docSnap.docs.length,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getArticleDetails = async (postId: number) => {
  try {
    const docRef = doc(db, "articles", `${postId}`);

    return await runTransaction(db, async (transaction) => {
      const docSnap = await transaction.get(docRef);
      if (!docSnap.exists()) {
        throw "Document does not exist!";
      }

      const docData = docSnap.data();
      const lastViewedAt = docData.last_viewed_at
        ? docData.last_viewed_at.toDate()
        : null;
      const viewCount = docData.view_count;
      const hotScore = docData.hot_score;

      const currentTime = dayjs();
      let newHotScore = hotScore;

      if (lastViewedAt) {
        const lastViewedTime = dayjs(lastViewedAt);
        const hoursDiff = currentTime.diff(lastViewedTime, "hours");

        newHotScore = (viewCount * 1.0) / (hoursDiff + 1) + hotScore;
      } else {
        newHotScore = viewCount * 1.0 + 1 + hotScore;
      }

      transaction.update(docRef, {
        view_count: viewCount + 1,
        hot_score: newHotScore,
        last_viewed_at: serverTimestamp(),
      });

      return docSnap.data();
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};
