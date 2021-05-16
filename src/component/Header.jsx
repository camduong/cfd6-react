import { Link, NavLink } from "react-router-dom";
import useDelayLink from "../hook/useDelayLink";

export function Header() {
  function toggleNav(){
    document.body.classList.toggle('menu-is-show')
  }
  let delayLink = useDelayLink()
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
            <div className="have-login">
              <div className="account">
                <Link onClick={delayLink} to="/profile" className="info">
                  <div className="name">Trần Lê Trọng Nghĩa</div>
                  <div className="avatar">
                    <img src="/assets/img/avt.png" alt="" />
                  </div>
                </Link>
              </div>
              <div className="hamberger"></div>
              <div className="sub">
                <Link onClick={delayLink} to="/profile">Thông tin tài khoản</Link>
                <Link onClick={delayLink} to="/profile/mycourse">Khóa học của tôi</Link>
                <Link onClick={delayLink} to="#">Đăng xuất</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <nav className="nav">
        <ul>
          <li className="li_login">
            <Link onClick={delayLink} href="#">Đăng nhập</Link>
            <Link onClick={delayLink} href="#">Đăng ký</Link>
          </li>
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
      <div className="overlay_nav" />
    </>
  )
}
