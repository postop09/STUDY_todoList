import React, { useState } from "react";
import Input from "../../component/Input";
import Button from "../../component/Button";
import { BtnWrapper, InputWrapper, TitleH2 } from "../../style/style";
import { AccType, AuthChange } from "../../types/type";
import onChangeSetValue from "../../util/onChangeSetValue";
import loginValidation from "../../util/loginValidation";
import * as APIs from "../../api/APIs";
import { PATH } from "../../const/enums";
import apiErrorHandler, { ApiError } from "../../api/apiErrorHandler";

const NewAccount = ({ onChangeAuth }: AuthChange) => {
  const [newAcc, setNewAcc] = useState<AccType>({ email: "", password: "" });

  const onCreate = async () => {
    try {
      const res = await APIs.postNewAcc(newAcc);
      localStorage.setItem("Authorization", res.token);
      window.location.replace(PATH.HOME);
    } catch (e) {
      const err = e as ApiError;
      apiErrorHandler(err);
    }
  };

  return (
    <>
      <TitleH2>회원가입</TitleH2>
      <form action="">
        <InputWrapper>
          <Input
            htmlFor={"inp_newId"}
            label={"아이디"}
            onChange={(e) =>
              onChangeSetValue(setNewAcc, "email", e.target.value)
            }
            value={newAcc.email}
          />
          <Input
            htmlFor={"inp_newPw"}
            label={"비밀번호"}
            type={"password"}
            onChange={(e) =>
              onChangeSetValue(setNewAcc, "password", e.target.value)
            }
            value={newAcc.password}
          />
        </InputWrapper>
        <BtnWrapper>
          <Button onClick={onChangeAuth}>뒤로가기</Button>
          <Button onClick={onCreate} disabled={!loginValidation(newAcc)}>
            계정생성
          </Button>
        </BtnWrapper>
      </form>
    </>
  );
};

export default NewAccount;
