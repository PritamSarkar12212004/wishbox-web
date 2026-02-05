import { useEffect } from "react";

const useCookie = () => {
  useEffect(() => {
    const accepted = localStorage.getItem("cookieAccepted");
    if (!accepted) {
      console.log("cookie not ccept")
    } else {
      console.log("cookie accept")
    }
  }, []);

};
export default useCookie;
