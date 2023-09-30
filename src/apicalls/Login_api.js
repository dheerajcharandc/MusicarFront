import axios from "axios";
import { toast } from "react-toastify";

export const LoginUser = (e, identifier, password) => {
  e.preventDefault();
  return axios({
    method: "post",
    url: "https://musicart-hire.onrender.com/login",
    data: {
      identifier: identifier,
      password: password,
    },
  })
    .then((res) => {
      // console.log(res);
      const userD = {
        user: res.data.user,
        authToken: res.data.token,
      };
      localStorage.setItem("userData", JSON.stringify(userD));
      return true;
    })
    .catch((err) => {
      // alert(err.response.data.message);
      toast.error(err.response.data.message);
      return false;
    });
};