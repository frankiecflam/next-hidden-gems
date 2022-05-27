import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

async function uploadImageToFirebase(image, path) {
  const imageRef = ref(storage, `images/${path}/${image.name}`);

  await uploadBytes(imageRef, image);
  const url = await getDownloadURL(imageRef);

  return url;
}

export default uploadImageToFirebase;
