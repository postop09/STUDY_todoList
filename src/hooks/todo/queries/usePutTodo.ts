import { useMutation } from "react-query";
import * as APIs from "../../../api/APIs";
import { queryClient } from "../../../App";
import { Todo } from "../../../types/type";

type TodoModifyParams = {
  id: string;
  todo: Todo;
}

const usePutTodo = () => {
  const {mutate: onModify} = useMutation(({id, todo}: TodoModifyParams) => APIs.putTodo(id, todo), {
    onSuccess: (_, {id}) => {
      queryClient.invalidateQueries("getTodoList");
      queryClient.invalidateQueries(["getTodo", id]);
    },
  });

  return {onModify};
};

export default usePutTodo;