function popoutGemmerDbKey(gemmerObj) {
  const deepClonedObj = JSON.parse(JSON.stringify(gemmerObj));
  delete deepClonedObj.gemmerDbKey;

  return deepClonedObj;
}

export default popoutGemmerDbKey;
