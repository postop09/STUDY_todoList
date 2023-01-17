import React, { useEffect, useState } from 'react';
import useToken from "../token/useToken";
import { PATH } from "../../const/path";

const useAuth = () => {
  const {getToken} = useToken();
  const [newAccount, setNewAccount] = useState(false);

  useEffect(() => {
    if (!!getToken()) {
      window.location.replace(PATH.HOME);
    }
  }, []);

  const onChangeAuth = () => {
    setNewAccount((prev) => !prev);
  };

  return {newAccount, onChangeAuth}
};

export default useAuth;