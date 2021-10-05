import { useEffect, useState } from "react";
import { storage, db, timestamp } from "./config";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection } from "firebase/firestore";
import { useAuth } from "./AuthContext";

function useStorage(file) {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  const { updateUserPhoto } = useAuth();

  useEffect(() => {
    if (!file) return;
    // references
    const storageRef = ref(storage, file.name);
    const collectionRef = collection(db, "profile_images");

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        console.error("FILE UPLOAD ERR: ", error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadUrl) => {
          await updateUserPhoto(downloadUrl);
        });
      }
    );
  }, [file]);

  return { progress };
}

export default useStorage;
