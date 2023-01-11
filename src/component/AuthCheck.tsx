import React, { ComponentType } from 'react';
import useTokenCheck from "../hooks/useTokenCheck";
import { PATH } from "../const/path";

const AuthCheck = (AuthComponent: ComponentType) => {
  const {isAuth} = useTokenCheck();
  const authorization = () => {
    if (!isAuth) {
      alert("인증정보가 없습니다. 다시 로그인해주세요.");
      window.location.replace(PATH.AUTH);
      return <></>;
    }

    return <AuthComponent />;
  }

  return authorization;
};

export default AuthCheck;