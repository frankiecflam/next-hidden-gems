import { useState, useEffect } from "react";

const useFileReader = (initialFileURL) => {
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(initialFileURL || null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  return {
    file,
    fileDataURL,
    handleFileChange,
  };
};

export default useFileReader;
