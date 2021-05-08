import { NavLink } from "react-router-dom";

export function TabTitle() {
  return (
    <div className="tab-title">
      <NavLink exact to="/profile">Thông tin tài khoản</NavLink>
      <NavLink to="/profile/mycourse">Khóa học của bạn</NavLink>
      <NavLink to="/profile/myproject">Dự án đã làm</NavLink>
      <NavLink to="/profile/payment">Lịch sử thanh toán</NavLink>
      <NavLink to="/profile/coin">Quản lý COIN của tôi</NavLink>
    </div>
  );
}
