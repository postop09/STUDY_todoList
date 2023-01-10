/** ----------------------------------------------
 >>> TABLE OF CONTENTS
 -------------------------------------------------
 0. 로그인
 1. TodoList
 ---------------------------------------------- */
import React from "react";

// ----------------------------------------------
// 0. 로그인
// ----------------------------------------------
export type AccType = {
  email: string;
  password: string;
};

export type AuthChange = {
  onChangeAuth: () => void;
};

export type BtnClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;

// ----------------------------------------------
// 1. TodoList
// ----------------------------------------------

export type Todo = Pick<TodoDetail, "title" | "content">;

export type TodoList = Pick<TodoDetail, "id" | "title" | "content">;

export type TodoDetail = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};