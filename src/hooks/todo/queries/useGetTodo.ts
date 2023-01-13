import * as APIs from "../../../api/APIs";
import { useQuery } from "react-query";
import { useState } from "react";
import { TodoDetail } from "../../../types/type";

const useGetTodo = (id: string) => {
  const [todoDetail, setTodoDetail] = useState<TodoDetail>();

  useQuery(["getTodo", id], () => APIs.getTodo(id), {
    onSuccess: (res) => {
      setTodoDetail(res.data);
    },
    refetchOnWindowFocus: false,
  });

  return {todoDetail};
};

export default useGetTodo;