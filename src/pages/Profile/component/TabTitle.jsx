import { NavLink } from "react-router-dom";

export function TabTitle({path}) {
  return (
    <div className="tab-title">
      <NavLink exact to={`${path}`}>Thông tin tài khoản</NavLink>
      <NavLink to={`${path}/mycourse`}>Khóa học của tôi</NavLink>
      <NavLink to={`${path}/myproject`}>Dự án đã làm</NavLink>
      <NavLink to={`${path}/payment`}>Lịch sử thanh toán</NavLink>
      <NavLink to={`${path}/coin`}>Quản lý COIN của tôi</NavLink>
    </div>
  );
}
