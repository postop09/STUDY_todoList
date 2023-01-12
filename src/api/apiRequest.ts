const apiRequest = async (
  method: string,
  url: string,
  authToken?: string | null,
  body?: {}
): Promise<any> => {
  const options = {
    method: method,
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

  const baseUrl = process.env.REACT_APP_API_URL;
  return new Promise(async (resolve, reject) => {
    const res = await fetch(baseUrl + url, options);
    const json = await res.json();
    if (res.status === 200 || res.status === 201) {
      return resolve(json);
    } else {
      return reject({
        ...json,
        status: res.status,
        statusText: res.statusText,
      });
    }
  });
};

export default apiRequest;
