import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

export default function PrivateRoute(prop) {
  let { login } = useSelector(store => store.auth)
  if (!login) {
    setTimeout(() => {
      document.querySelector('.popup-login').style.display = 'flex'
    }, 1)
    return <Redirect to="/" />
  }

  return <Route {...prop} />
}