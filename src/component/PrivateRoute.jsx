import { Redirect, Route } from "react-router";
import useAuth from "../hook/useAuth";

export default function PrivateRoute(prop) {
  let { login } = useAuth()
  if (!login) {
    setTimeout(()=>{
      document.querySelector('.popup-login').style.display = 'flex'
    },1)
    return <Redirect to="/" />
  }

  return <Route {...prop} />
}