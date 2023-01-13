import * as APIs from "../../api/APIs";
import { useMutation, useQuery } from "react-query";
import { useState } from "react";
import { TodoDetail } from "../../types/type";
import { queryClient } from "../../App";

const useDetailTodo = (id: string) => {
  const [todoDetail, setTodoDetail] = useState<TodoDetail>();

  useQuery(["getTodo", id], () => APIs.getTodo(id), {
    onSuccess: (res) => {
      setTodoDetail(res.data);
    },
    refetchOnWindowFocus: false,
  });

  return {todoDetail};
};

export default useDetailTodo;