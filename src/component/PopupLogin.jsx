import reactDom from "react-dom";
import useFormValidate from "../hook/useFormValidate";

export default function PopupLogin() {
  let {inputChange, check, error, form} = useFormValidate({
    username: "",
    password: ""
  }, {
    rule: {
      username: {
        required: true
      },
      password: {
        required: true
      }
    }
  })
  function close(){
    document.querySelector('.popup-login').style.display = 'none'
  }
  return reactDom.createPortal(
    <div className="popup-form popup-login" style={{display: 'none'}}>
      <div className="wrap">
        {/* login-form */}
        <div className="ct_login" style={{ display: 'block' }}>
          <h2 className="title">Đăng nhập</h2>
          <input type="text" placeholder="Email / Số điện thoại" />
          <input type="password" placeholder="Mật khẩu" />
          <div className="remember">
            <label className="btn-remember">
              <div>
                <input value={form.username} name='username' onChange={inputChange} type="checkbox" />
                {
                  error.username && <p className="error-text">{error.username}</p>
                }
                <input value={form.password} name='password' onChange={inputChange} type="checkbox" />
                {
                  error.password && <p className="error-text">{error.password}</p>
                }
              </div>
              <p>Nhớ mật khẩu</p>
            </label>
            <a href="#" className="forget">Quên mật khẩu?</a>
          </div>
          <div className="btn rect main btn-login">đăng nhập</div>
          <div className="text-register" style={{}}>
            <strong>hoặc đăng ký bằng</strong>
          </div>
          <div>
            <div className="btn btn-icon rect white btn-google">
              <img src="/assets/img/google.svg" alt="" />
                Google
              </div>
          </div>
          <div className="close" onClick={close}>
            <img src="/assets/img/close-icon.png" alt="" />
          </div>
        </div>
        {/* email form */}
        <div className="ct_email">
          <h2 className="title">Đặt lại mật khẩu</h2>
          <input type="text" placeholder="Email" />
          <div className="btn rect main btn-next">Tiếp theo</div>
          <div className="back" />
          <div className="close">
            <img src="/assets/img/close-icon.png" alt="" />
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}