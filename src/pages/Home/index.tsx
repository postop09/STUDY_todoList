import React, { useEffect } from "react";
import * as APIs from "../../api/APIs";

const Index = () => {
  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const res = await APIs.getList();
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h2>투두리스트</h2>
      <button type="button" onClick={() => {}}>
        투두리스트 추가
      </button>
    </div>
  );
};

export default Index;
