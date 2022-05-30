import { db } from "../../firebase";
import { ref, update } from "firebase/database";

async function updateGemmerData(newData, gemmerDbKey) {
  const userRef = ref(db, `user/${gemmerDbKey}`);

  // Update DB
  await update(userRef, newData);

  return true;
}

export default updateGemmerData;
