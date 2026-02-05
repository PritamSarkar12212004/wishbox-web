import CryptoJS from "crypto-js";
const readData = ({ key }: { key: string }) => {
  try {
    const encrypted = localStorage.getItem(key);
    if (!encrypted) return null;
    const bytes = CryptoJS.AES.decrypt(encrypted, "mySecretKey");
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decrypted);
  } catch (err) {
    console.error("Error reading secure data:", err);
    return null;
  }
};
export default readData;
