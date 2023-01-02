import React from "react";

const Home = () => {
  const data = {
    email: "postop09@naver.com",
    password: "12345678",
  };

  const getList = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    console.log(json);
  };

  return (
    <div>
      <h1>Home</h1>
      <button type="button" onClick={getList}>
        로그인
      </button>
    </div>
  );
};

export default Home;
