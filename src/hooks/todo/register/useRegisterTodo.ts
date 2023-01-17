import { useState } from 'react';
import { Todo } from "../../../types/type";
import { useMutation } from "react-query";
import * as APIs from "../../../api/APIs";
import { queryClient } from "../../../App";
import onChangeSetValue from "../../../util/onChangeSetValue";

const useRegisterTodo = () => {
  const [todoList, setTodoList] = useState<Todo>({
    title: "",
    content: "",
  });

  const {mutate: onRegister} = useMutation(() => APIs.postTodo(todoList), {
    onSuccess: () => {
      queryClient.invalidateQueries("getTodoList");
      setTodoList({
        title: "",
        content: "",
      });
    },
  });

  const updateValue = (key: string, value: string) => {
    return onChangeSetValue(setTodoList, key, value);
  };

  return {onRegister, todoList, updateValue};
};

export default useRegisterTodo;