import { useEffect, useState } from 'react';
import token from "../util/handleToken";

const useTokenCheck = () => {
  const [isAuth, setIsAuth] = useState(true);

  useEffect(() => {
    if (!!token.get()) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);

  return {isAuth};
};

export default useTokenCheck;