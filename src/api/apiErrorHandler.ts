export type ApiError = {
  details: string;
  status: number;
  statusText: string;
};

const apiErrorHandler = (error: ApiError) => {
  if (
    error.details === "Token is missing" ||
    error.status === 401 ||
    error.status === 403
  ) {
    alert(`${error.details}\n다시 로그인을 시도해주세요.`);
    window.location.replace("/auth");
  } else {
    alert(`${error.details}`);
  }
};

export default apiErrorHandler;
