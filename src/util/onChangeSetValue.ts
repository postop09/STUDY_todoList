import React from "react";

const onChangeSetValue = <T>(
  setFn: React.Dispatch<React.SetStateAction<T>>,
  key: string,
  value: string
) => {
  setFn((prev) => {
    return {
      ...prev,
      [key]: value,
    };
  });
};

export default onChangeSetValue;
