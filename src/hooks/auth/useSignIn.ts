import { useEffect, useState } from 'react';
import { AccType } from "../../types/type";
import { useMutation } from "react-query";
import * as APIs from "../../api/APIs";
import { PATH } from "../../const/path";
import useToken from "../token/useToken";
import onChangeSetValue from "../../util/onChangeSetValue";

const useSignIn = () => {
  const {setToken, getToken} = useToken();
  const [account, setAccount] = useState<AccType>({ email: "", password: "" });

  useEffect(() => {
    if (!!getToken()) window.location.replace(PATH.HOME);
  }, []);

  const {mutate: onSignIn} = useMutation(() => APIs.postSignIn(account), {
    onSuccess: (data) => {
      setToken(data.token);
      window.location.replace(PATH.HOME);
    },
  });

  const updateValue = (key: string, value: string) => {
    return onChangeSetValue(setAccount, key, value);
  };

  return {account, onSignIn, updateValue};
};

export default useSignIn;