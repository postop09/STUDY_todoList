/** ----------------------------------------------
 >>> TABLE OF CONTENTS
 -------------------------------------------------
 0. 로그인
 1. TodoList
 ---------------------------------------------- */

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

export type SuccessAction = {
  onSuccess: () => void;
};
