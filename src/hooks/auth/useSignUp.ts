import { useState } from 'react';
import useToken from "../token/useToken";
import { AccType } from "../../types/type";
import { useMutation } from "react-query";
import * as APIs from "../../api/APIs";
import { PATH } from "../../const/path";
import onChangeSetValue from "../../util/onChangeSetValue";

const useSignUp = () => {
  const {setToken} = useToken();
  const [newAcc, setNewAcc] = useState<AccType>({ email: "", password: "" });

  const {mutate: onSignUp} = useMutation(() => APIs.postSignUp(newAcc), {
    onSuccess: (data) => {
      alert("계정이 생성되었습니다.");
      setToken(data.token);
      window.location.replace(PATH.ROOT);
    },
  });

  const updateValue = (key: string, value: string) => {
    return onChangeSetValue(setNewAcc, key, value);
  };

  const onCancel = () => {
    const result = window.confirm("회원가입을 취소하고 로그인 화면으로 돌아갈까요?");
    if (result) window.location.href = PATH.SIGN_IN
  };

  return {newAcc, onSignUp, onCancel, updateValue};
};

export default useSignUp;