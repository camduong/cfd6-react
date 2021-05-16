import { Link, NavLink } from "react-router-dom";

export function Header() {
  function toggleNav(){
    document.body.classList.toggle('menu-is-show')
  }
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
          <Link to="/" className="logo">
            <img src="/assets/img/logo.svg" alt="" />
            <h1>CFD</h1>
          </Link>
          <div className="right">
            <div className="have-login">
              <div className="account">
                <Link to="/profile" className="info">
                  <div className="name">Trần Lê Trọng Nghĩa</div>
                  <div className="avatar">
                    <img src="/assets/img/avt.png" alt="" />
                  </div>
                </Link>
              </div>
              <div className="hamberger"></div>
              <div className="sub">
                <Link to="/profile">Thông tin tài khoản</Link>
                <Link to="/profile/mycourse">Khóa học của tôi</Link>
                <Link to="#">Đăng xuất</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <nav className="nav">
        <ul>
          <li className="li_login">
            <Link href="#">Đăng nhập</Link>
            <Link href="#">Đăng ký</Link>
          </li>
          <li>
            <NavLink exact to="/">Trang chủ</NavLink>
          </li>
          <li>
            <NavLink to="/team">CFD Team</NavLink>
          </li>
          <li>
            <NavLink to="/course">Khóa Học</NavLink>
          </li>
          <li>
            <NavLink to="/project">Dự Án</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Liên hệ</NavLink>
          </li>
        </ul>
      </nav>
      <div className="overlay_nav" />
    </>
  )
}
