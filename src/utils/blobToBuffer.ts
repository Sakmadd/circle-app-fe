export const blobToBase64 = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.result) {
        resolve(reader.result.toString());
      } else {
        reject(new Error('Failed to convert Blob to Base64'));
      }
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob); // Menghasilkan Base64
  });
};
