const request = (method: string, uri: string, authToken: string, body = {}) => {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (method !== "GET") {
    Object.assign(options, { body: JSON.stringify(body) });
  }

  if (authToken) {
    Object.assign(options.headers, { Authorization: authToken });
  }
};

export default request;
