import apiRequest from "./apiRequest";
import { AccType } from "../types/type";

/** ----------------------------------------------
 >>> TABLE OF CONTENTS
 -------------------------------------------------
 0. 로그인
 1. ToDoList
 ---------------------------------------------- */

// ----------------------------------------------
// 0. 로그인
// ----------------------------------------------

// 0-1. 회원가입
export const postNewAcc = (newAcc: AccType) => {
  const authToken = localStorage.getItem("Authorization");
  return apiRequest("POST", "/users/create", null, newAcc);
};

// 0-2. 로그인
export const postLogin = (account: AccType) => {
  const authToken = localStorage.getItem("Authorization");
  return apiRequest("POST", "/users/login", null, account);
};

// ----------------------------------------------
// 1. ToDoList
// ----------------------------------------------

// 1-1. 목록조회
export const getList = () => {
  const authToken = localStorage.getItem("Authorization");
  return apiRequest("GET", "/todos", authToken);
};
