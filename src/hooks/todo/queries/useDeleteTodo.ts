import { useMutation } from "react-query";
import * as APIs from "../../../api/APIs";
import { queryClient } from "../../../App";

const useDeleteTodo = () => {
  const {mutate: onDelete} = useMutation((id: string) => APIs.deleteTodo(id), {
    onSuccess: () => {
      queryClient.invalidateQueries("getTodoList");
    },
  });

  return {onDelete};
};

export default useDeleteTodo;