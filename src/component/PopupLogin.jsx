import reactDom from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import useFormValidate from "../hook/useFormValidate";
import { loginAction } from "../redux/actions/authAction";

export default function PopupLogin() {
  let { inputChange, check, error, form } = useFormValidate({
    username: "",
    password: ""
  }, {
    rule: {
      username: {
        required: true,
        pattern: 'email'
      },
      password: {
        required: true,
        min: 6,
        max: 32
      }
    }
  })
  let dispatch = useDispatch()

  function close() {
    document.querySelector('.popup-login').style.display = 'none'
  }
  let {loginError} = useSelector(store => store.auth)

  async function loginHandle() {
    let error = check()
    if (Object.keys(error).length === 0) {
      dispatch(loginAction({
        username: form.username,
        password: form.password
      }, close))
    }
  }
  return reactDom.createPortal(
    <div className="popup-form popup-login" style={{ display: 'none' }}>
      <div className="wrap">
        {/* login-form */}
        <div className="ct_login" style={{ display: 'block' }}>
          <h2 className="title">Đăng nhập</h2>
          {loginError && <p className="error-text">{loginError}</p>}
          <div className="input-grp">
            <input value={form.username} name='username' onChange={inputChange} type="text" placeholder='Email/Số điện thoại' />
            {
              error.username && <p className="error-text">{error.username}</p>
            }
          </div>
          <div className="input-grp">
            <input value={form.password} name='password' onChange={inputChange} type="password" placeholder='Mật khẩu' />
            {
              error.password && <p className="error-text">{error.password}</p>
            }
          </div>
          <div className="remember">
            <label className="btn-remember">
              <div>
                <input type="checkbox" />
              </div>
              <p>Nhớ mật khẩu</p>
            </label>
            <a href="#" className="forget">Quên mật khẩu?</a>
          </div>
          <div className="btn rect main btn-login" onClick={loginHandle}>đăng nhập</div>
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
        {/* <div className="ct_email">
          <h2 className="title">Đặt lại mật khẩu</h2>
          <input type="text" placeholder="Email" />
          <div className="btn rect main btn-next">Tiếp theo</div>
          <div className="back" />
          <div className="close">
            <img src="/assets/img/close-icon.png" alt="" />
          </div>
        </div> */}
      </div>
    </div>,
    document.body
  )
}