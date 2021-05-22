import { useState } from "react";
import useFormValidate from "../../hook/useFormValidate";

export default function Register() {

  let { form, error, inputChange, check } = useFormValidate({
    name: '',
    phone: '',
    email: '',
    url: '',
    note: ''
  }, {
    rule: {
      name: {
        required: true
      },
      phone: {
        required: true,
        pattern: "phone"
      },
      email: {
        required: true,
        pattern: 'email'
      },
      url: {
        required: true,
        pattern: 'url'
      },
      note: {
        required: true
      }
    },
    message: {
      name: {
        required: 'Họ và tên không được để trống'
      },
      phone: {
        required: 'Số điện thoại không được để trống',
        pattern: 'Phải là số điện thoại VN'
      },
      email:{
        required: "Email không được để trống",
        pattern: 'Email phải đúng định dạng'
      },
      url:{
        required: "Url không được để trống",
        pattern: 'Phải là link Facebook'
      },
      note:{
        required: "Ý kiền không được để trống"
      }
    }

  })
  function onSubmit() {
    let errorObj = check()

    if (Object.keys(errorObj).length === 0) {
      console.log(form)
    }
  }

  return (
    <main className="register-course" id="main">
      <section>
        <div className="container">
          <div className="wrap container">
            <div className="main-sub-title">ĐĂNG KÝ</div>
            <h1 className="main-title">Thực chiến front-end căn bản </h1>
            <div className="main-info">
              <div className="date">
                <strong>Khai giảng:</strong> 15/11/2020
              </div>
              <div className="time">
                <strong>Thời lượng:</strong> 18 buổi
              </div>
              <div className="time">
                <strong>Học phí:</strong> 6.000.000 VND
              </div>
            </div>
            <div className="form">
              <label>
                <div className="label-group">
                  <p>Họ và tên<span>*</span></p>
                  <input type="text" value={form.name} onChange={inputChange} name='name' placeholder="Họ và tên bạn" />
                </div>
                {
                  error.name && <p className="error-text">{error.name}</p>
                }
              </label>
              <label>
                <div className="label-group">
                  <p>Số điện thoại<span>*</span></p>
                  <input type="text" value={form.phone} onChange={inputChange} name='phone' placeholder="Số điện thoại" />
                </div>
                {
                  error.phone && <p className="error-text">{error.phone}</p>
                }
              </label>
              <label>
                <div className="label-group">
                  <p>Email<span>*</span></p>
                  <input type="text" value={form.email} onChange={inputChange} name='email' placeholder="Email của bạn" />
                </div>
                {
                  error.email && <p className="error-text">{error.email}</p>
                }
              </label>
              <label>
                <div className="label-group">
                  <p>URL Facebook<span>*</span></p>
                  <input type="text" value={form.url} onChange={inputChange} name='url' placeholder="https://facebook.com" />
                </div>
                {
                  error.url && <p className="error-text">{error.url}</p>
                }
              </label>
              <label className="disable">
                <div className="label-group">
                  <p>Sử dụng COIN</p>
                  <div className="checkcontainer">
                    Hiện có <strong>300 COIN</strong>
                    <input type="checkbox" defaultChecked="checked" />
                    <span className="checkmark" />
                  </div>
                </div>
              </label>
              <label>
                <div className="label-group">
                  <p>Hình thức thanh toán</p>
                  <div className="select">
                    <div className="head">Chuyển khoản</div>
                    <div className="sub">
                      <a href="#">Chuyển khoản</a>
                      <a href="#">Thanh toán tiền mặt</a>
                    </div>
                  </div>
                </div>
              </label>
              <label>
                <div className="label-group">
                  <p>Ý kiến cá nhân<span>*</span></p>
                  <input type="text" name='note' value={form.note} onChange={inputChange} placeholder="Mong muốn cá nhân và lịch bạn có thể học." />
                </div>
                {
                  error.note && <p className="error-text">{error.note}</p>
                }
              </label>
              <div className="btn main rect" onClick={onSubmit}>đăng ký</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
