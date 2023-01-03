import React from "react";
import { AccType } from "../types/type";

const onChangeSetValue = (
  setFn: React.Dispatch<React.SetStateAction<AccType>>,
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
