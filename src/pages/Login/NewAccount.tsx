import React, { useState } from "react";
import Input from "../../component/Input";
import Button from "../../component/Button";
import { BtnWrapper, InputWrapper, TitleH2 } from "../../style/style";
import apiRequest from "../../api/apiRequest";
import { AccType } from "../../types/type";
import onChangeSetValue from "../../util/onChangeSetValue";
import validationCheck from "./validationCheck";
import {useNavigate} from "react-router-dom";

const NewAccount = ({ setNewAccount }: any) => {
  const [newAcc, setNewAcc] = useState<AccType>({ email: "", password: "" });
  const navigate = useNavigate();

  const onCreate = async () => {
    try {
      const res = await apiRequest("POST", "/users/create", null, newAcc);
      if (res.token) {
        localStorage.setItem("Authorization", res.token);
        navigate("/home");
      }
    } catch (e) {
      console.log(e);
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
          />
          <Input
            htmlFor={"inp_newPw"}
            label={"비밀번호"}
            type={"password"}
            onChange={(e) =>
              onChangeSetValue(setNewAcc, "password", e.target.value)
            }
          />
        </InputWrapper>
        <BtnWrapper>
          <Button onClick={() => setNewAccount(false)}>뒤로가기</Button>
          <Button onClick={onCreate} disabled={!validationCheck(newAcc)}>
            계정생성
          </Button>
        </BtnWrapper>
      </form>
    </>
  );
};

export default NewAccount;
