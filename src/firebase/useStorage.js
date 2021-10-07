import { useEffect, useState } from "react";
import { storage } from "./config";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function useStorage(file, path, onDone = () => {}) {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    if (!file) return;
    // references
    const storageRef = ref(storage, `${path}/${file.name}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    const unsub = uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        console.error("FILE UPLOAD ERR: ", error.message);
        console.error("FILE ON ERROR:", file);
        setError(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadUrl) => {
          setUrl(downloadUrl);
          await onDone(downloadUrl);
        });
      }
    );

    return unsub;
  }, [file, onDone, path]);

  return { url, error, progress };
}

export default useStorage;
