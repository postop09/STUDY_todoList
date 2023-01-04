export type AccType = {
  email: string;
  password: string;
};

export type TodoList = {
  title: string;
  content: string;
};

type TodoDetail = {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export type TodoDetailProps = TodoList & TodoDetail;