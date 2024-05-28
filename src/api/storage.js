const storeToken = (token) => {
  console.log("store token", token);
  localStorage.setItem("token", token);
};

const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

const removeToken = () => {
  localStorage.removeItem("token");
};
export { storeToken, getToken, removeToken };
