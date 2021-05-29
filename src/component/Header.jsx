import { useDispatch, useSelector, useStore } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hook/useAuth";
import useDelayLink from "../hook/useDelayLink";
import { logoutAction } from "../redux/actions/authAction";

export function Header() {
  function toggleNav() {
    document.body.classList.toggle('menu-is-show')
  }
  let delayLink = useDelayLink()
  let { login } = useSelector(store => store.auth)
  function Popup() {
    document.querySelector('.popup-login').style.display = 'flex'
  }

  let dispatch = useDispatch()
  function logout(e) {
    e.preventDefault();
    dispatch(logoutAction())
    console.log(logoutAction())
  }

  // let store = useSelector(state => state)

  return (
    <>
      <header id="header">
        <div className="wrap">
          <div className="menu-hambeger" onClick={toggleNav}>
            <div className="button">
              <span />
              <span />
              <span />
            </div>
            <span className="text">menu</span>
          </div>
          <Link to="/" className="logo" onClick={delayLink}>
            <img src="/assets/img/logo.svg" alt="" />
            <h1>CFD</h1>
          </Link>
          <div className="right">
            {
              login ?
                <div className="have-login">
                  <div className="account">
                    <div className="info">
                      <div className="name">{login.name}</div>
                      <div className="avatar">
                        <img src={login.avatar} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="hamberger"></div>
                  <div className="sub">
                    <Link onClick={delayLink} to="/profile">Thông tin tài khoản</Link>
                    <Link onClick={delayLink} to="/profile/mycourse">Khóa học của tôi</Link>
                    <Link onClick={logout} to="#">Đăng xuất</Link>
                  </div>
                </div>
                :
                <div className="not-login bg-none">
                  <Link className='btn-register' onClick={Popup} to="#">Đăng nhập</Link>
                  <Link className='btn main btn-open-login' onClick={Popup} to="#">Đăng ký</Link>
                </div>
            }
          </div>
        </div>
      </header>
      <nav className="nav">
        <ul>
          <li>
            <NavLink onClick={delayLink} exact to="/">Trang chủ</NavLink>
          </li>
          <li>
            <NavLink onClick={delayLink} to="/team">CFD Team</NavLink>
          </li>
          <li>
            <NavLink onClick={delayLink} to="/course">Khóa Học</NavLink>
          </li>
          <li>
            <NavLink onClick={delayLink} to="/project">Dự Án</NavLink>
          </li>
          <li>
            <NavLink onClick={delayLink} to="/contact">Liên hệ</NavLink>
          </li>
          <li>
            <NavLink onClick={delayLink} to="/faq">Câu Hỏi Thường Gặp</NavLink>
          </li>
        </ul>
      </nav>
      <div className="overlay_nav" onClick={toggleNav} />
    </>
  )
}
