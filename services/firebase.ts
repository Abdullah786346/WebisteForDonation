import firebaseConfig from "@/config/firebase";
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

initializeApp(firebaseConfig);

export async function uploadImage(file: File | null): Promise<string> {
  if (!file) throw new Error("No Image file provided");

  const storage = getStorage();
  const imageRef = ref(storage, `/images/${Date.now()}-${file.name}}`);

  try {
    const snapshot = await uploadBytes(imageRef, file);

    return await getDownloadURL(snapshot.ref);
  } catch (error) {
    console.error("Upload failed:", error);
    throw new Error("Image upload failed");
  }
}

export const provider = new GoogleAuthProvider();
export const auth = getAuth();
