import { Link } from "react-router-dom";

export function Header() {
  return (
    <>
      <header id="header">
        <div className="wrap">
          <div className="menu-hambeger" >
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
                <a href="#">Khóa học của tôi</a>
                <a href="#">Thông tin tài khoản</a>
                <a href="#">Đăng xuất</a>
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
          <li className="active">
            <Link to="/">Trang chủ</Link>
          </li>
          <li>
            <Link to="/team">CFD Team</Link>
          </li>
          <li>
            <Link to="/course">Khóa Học</Link>
          </li>
          <li>
            <Link to="/project">Dự Án</Link>
          </li>
          <li>
            <Link to="/contact">Liên hệ</Link>
          </li>
        </ul>
      </nav>
      <div className="overlay_nav" />
    </>
  );
}
