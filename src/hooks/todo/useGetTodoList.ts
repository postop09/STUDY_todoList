import { useState } from 'react';
import { useQuery } from "react-query";
import * as APIs from "../../api/APIs";
import { TodoDetail } from "../../types/type";

const useGetTodoList = () => {
  const [todoList, setTodoList] = useState<TodoDetail[]>([]);

  useQuery("getTodoList", APIs.getTodoList, {
    onSuccess: (res) => {
      const data: TodoDetail[] = res.data;
      const filter = data.filter((item: TodoDetail) => item.title);
      setTodoList(filter);
    },
    refetchOnWindowFocus: false
  });

  return {todoList};
};

export default useGetTodoList;