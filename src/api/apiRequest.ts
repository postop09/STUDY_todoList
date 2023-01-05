const request = async (
  method: string,
  url: string,
  authToken?: string | null,
  body?: any
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

// type ApiParams = {
//   uri: string;
//   authToken?: string;
//   body?: {};
// };
//
// class ApiRequest {
//   readonly baseUrl = process.env.REACT_APP_API_URL;
//
//   get = ({ uri, authToken }: ApiParams) => {
//     return request("GET", this.baseUrl + uri, authToken);
//   };
//   post = (uri, authToken, body) => {
//     return request("POST", this.baseUrl + uri, authToken, body);
//   };
//   put = (uri, authToken, body) => {
//     return request("PUT", this.baseUrl + uri, authToken, body);
//   };
//   patch = (uri, authToken, body) => {
//     return request("PATCH", this.baseUrl + uri, authToken, body);
//   };
//   delete = (uri, authToken, body) => {
//     return request("DELETE", this.baseUrl + uri, authToken, body);
//   };
// }

export default request;
