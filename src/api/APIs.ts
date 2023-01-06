import apiRequest from "./apiRequest";
import { AccType, Todo } from "../types/type";

/** ----------------------------------------------
 >>> TABLE OF CONTENTS
 -------------------------------------------------
 0. 로그인
 1. ListItem
 ---------------------------------------------- */

// ----------------------------------------------
// 0. 로그인
// ----------------------------------------------

// 0-1. 회원가입
export const postNewAcc = (newAcc: AccType) => {
  return apiRequest("POST", "/users/create", null, newAcc);
};

// 0-2. 로그인
export const postLogin = (account: AccType) => {
  return apiRequest("POST", "/users/login", null, account);
};

// ----------------------------------------------
// 1. ListItem
// ----------------------------------------------

// 1-1. 목록조회
export const getTodoList = () => {
  const authToken = localStorage.getItem("Authorization");
  return apiRequest("GET", "/todos", authToken);
};

// 1-2. 상세조회
export const getTodo = (id: string) => {
  const authToken = localStorage.getItem("Authorization");
  return apiRequest("GET", `/todos/${id}`, authToken);
};

// 1-3. 등록
export const postTodo = (body: Todo) => {
  const authToken = localStorage.getItem("Authorization");
  return apiRequest("POST", "/todos", authToken, body);
};

// 1-4. 수정
export const putTodo = (id: string, body: Todo) => {
  const authToken = localStorage.getItem("Authorization");
  return apiRequest("PUT", `/todos/${id}`, authToken, body);
};

// 1-5. 삭제
export const deleteTodo = (id: string) => {
  const authToken = localStorage.getItem("Authorization");
  return apiRequest("PUT", `/todos/${id}`, authToken);
};
