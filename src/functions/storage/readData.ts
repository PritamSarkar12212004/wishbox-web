import CryptoJS from "crypto-js";
import keyToken from "../../consts/secure/key";
const readData = ({ key }: { key: string }) => {
  try {
    const encrypted = localStorage.getItem(key);
    if (!encrypted) return null;
    const bytes = CryptoJS.AES.decrypt(
      encrypted,
      keyToken.CRYPTO.CRYPTO_TOKEN_SECURE_KEY,
    );
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decrypted);
  } catch (err) {
    console.error("Error reading secure data:", err);
    return null;
  }
};
export default readData;
