import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";


const firebaseConfig = {
  apiKey: "AIzaSyBijuXGAoG795fNTFJ2FGFfpqaW1NZJBbM",
  authDomain: "toolkis3.firebaseapp.com",
  projectId: "toolkis3",
  storageBucket: "toolkis3.appspot.com",
  messagingSenderId: "182646283548",
  appId: "1:182646283548:web:b8e01b8dadd7b90c7eaed9"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app)

export async function uploadFile(file) {
  const storageRef= ref(storage, v4())
  return await uploadBytes(storageRef, file)

}