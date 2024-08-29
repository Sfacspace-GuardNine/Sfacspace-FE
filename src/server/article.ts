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
  startAt,
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
        startAt(lastVisible),
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
      page: Math.ceil(docSnap.docs.length / 10),
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
        startAt(lastVisible),
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
      page: Math.ceil(docSnap.docs.length / 10),
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
      const doc = await transaction.get(docRef);
      if (!doc.exists()) {
        throw "Document does not exist!";
      }

      const docData = doc.data();
      const lastViewedAt = docData.last_viewed_at;
      const viewCount = docData.view_count;
      const hotScore = docData.hot_score;

      if (lastViewedAt) {
        const currentTime = dayjs();
        const lastViewedTime = dayjs(lastViewedAt.seconds * 1000);
        const hoursDiff = currentTime.diff(lastViewedTime, "hours");

        const newHotScore = lastViewedAt
          ? (viewCount * 1.0) / (hoursDiff + 1) + hotScore
          : viewCount * 1.0 + 1 + hotScore;

        transaction.update(docRef, {
          view_count: viewCount + 1,
          hot_score: newHotScore,
          last_viewed_at: serverTimestamp(),
        });
      } else {
        transaction.update(docRef, {
          view_count: viewCount + 1,
          hot_score: hotScore + 1,
          last_viewed_at: serverTimestamp(),
        });
      }

      return doc.data();
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};
