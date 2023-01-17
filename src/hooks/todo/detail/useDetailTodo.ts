import { useEffect, useState } from 'react';
import { Todo } from "../../../types/type";
import useGetTodo from "../queries/useGetTodo";
import onChangeSetValue from "../../../util/onChangeSetValue";
import usePutTodo from "../queries/usePutTodo";

const useDetailTodo = (todoId: string) => {
  const {todoDetail} = useGetTodo(todoId);
  const {onModify} = usePutTodo();
  const [todoList, setTodoList] = useState<Todo>({
    title: "",
    content: "",
  });
  const [isReadOnly, setIsReadOnly] = useState(true);

  useEffect(() => {
    if (todoDetail) {
      setTodoList({
        title: todoDetail.title,
        content: todoDetail.content,
      })
    }
  }, [todoDetail]);

  const handleModify = () => {
    const body = {
      id: todoId,
      todo: todoList,
    }
    onModify(body);
    setIsReadOnly(true);
  }

  const updateValue = (key: string, value: string) => {
    return onChangeSetValue(setTodoList, key, value);
  };

  return {todoList, updateValue, handleModify, isReadOnly, setIsReadOnly};
};

export default useDetailTodo;