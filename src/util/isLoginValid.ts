import { AccType } from "../types/type";

const isLoginValid = (params: AccType): boolean => {
  const { email, password } = params;

  // 이메일 정규표현식 (영어/숫자 + @ + 주소.주소) : 조건을 만족하면 true
  const emailValid = () => {
    const emailValid = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.+$]/g;
    return emailValid.test(email);
  };

  // 비밀번호 정규표현식 (영어, 숫자, 특수문자, 8자이상) : 조건을 만족하면 true
  const passwdValid = () => {
    const passwdValid = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$%*#^?&()\-_=+]).{8}/g;
    return passwdValid.test(password);
  };

  return emailValid() && passwdValid() && !!email && !!password ;
};

export default isLoginValid;
