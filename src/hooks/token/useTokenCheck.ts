import { useEffect, useState } from 'react';
import useToken from "./useToken";

const useTokenCheck = () => {
  const [isAuth, setIsAuth] = useState(true);
  const {getToken} = useToken();

  useEffect(() => {
    if (!!getToken()) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);

  return {isAuth};
};

export default useTokenCheck;