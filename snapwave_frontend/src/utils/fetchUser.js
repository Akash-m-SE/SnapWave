import { jwtDecode } from "jwt-decode";

export const fetchUser = () => {
  const userInfo =
    localStorage.getItem("user") !== null
      ? jwtDecode(JSON.parse(localStorage.getItem("user")))
      : localStorage.clear();

  // if (userInfo !== null) {
  //   console.log("userInfo from fetch user", userInfo);
  // }

  return userInfo;
};
