import { useEffect, useState } from "react";
import { db } from "./config";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

function useFirestore(collectionName) {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    console.log("useFirestore ran");
    const unsubscribe = onSnapshot(
      query(collection(db, collectionName), orderBy("createdAt", "asc")),
      (querySnapshot) => {
        const documents = [];
        querySnapshot.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      }
    );

    return unsubscribe;
  }, [collectionName]);

  return { docs };
}

export default useFirestore;
