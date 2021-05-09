import { useState } from "react";

export default function Register() {

  // let [name,setName] = useState('')
  // let [phone,setPhone] = useState('')
  // let [email,setEmail] = useState('')
  // let [url,setUrl] = useState('')
  let [form,setForm] = useState({
    name: '',
    phone: '',
    email: '',
    url: '',
    note: ''
  })

  let [error, setError] = useState({
    name: '',
    phone: '',
    email: '',
    url: '',
    note: ''
  })
  function onSubmit(){
    let errorObj = {}
    if(!form.name.trim()){
      errorObj.name = "Tên không được bỏ trống"
    // }else{
    //   console.log(form.name.trim())
    //   form.name.trim().replace(/ +/g, " ")
    }
    if(!form.phone.trim()){
      errorObj.phone = "Điện thoại không được bỏ trống"
    } else if(!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone.trim())){
      errorObj.phone = 'Điện thoại không đúng định dạng'
    }

    if(!form.email.trim()){
      errorObj.email = "Email không được bỏ trống"
    }else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email.trim())){
      errorObj.email = 'Email không đúng định dạng'
    }

    if(!form.url.trim()){
      errorObj.url = "Url không được bỏ trống"
    }else if(!/^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/.test(form.url.trim())){
      errorObj.url = "Urlkhông đúng định dạng"

    }
    if(Object.keys(errorObj).length === 0){
      console.log(form)
    }else{
      setError(errorObj)
    }
  }

  function inputOnChange(e){
    let name = e.target.name
    let value = e.target.value

    onSubmit()
    setForm({
      ...form,
      [name]: value
    })
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
                  <input type="text" value={form.name} onChange={inputOnChange} name='name' placeholder="Họ và tên bạn" />
                </div>
                {
                  error.name && <p className="error-text">{error.name}</p>
                }
              </label>
              <label>
                <div className="label-group">
                  <p>Số điện thoại<span>*</span></p>
                  <input type="text" value={form.phone} onChange={inputOnChange} name='phone' placeholder="Số điện thoại" />
                </div>
                {
                  error.phone && <p className="error-text">{error.phone}</p>
                }
              </label>
              <label>
                <div className="label-group">
                  <p>Email<span>*</span></p>
                  <input type="text" value={form.email} onChange={inputOnChange} name='email' placeholder="Email của bạn" />
                </div>
                {
                  error.email && <p className="error-text">{error.email}</p>
                }
              </label>
              <label>
                <div className="label-group">
                  <p>URL Facebook<span>*</span></p>
                  <input type="text" value={form.url} onChange={inputOnChange} name='url' placeholder="https://facebook.com" />
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
                  <p>Ý kiến cá nhân</p>
                  <input type="text" name='note' value={form.note} onChange={inputOnChange} placeholder="Mong muốn cá nhân và lịch bạn có thể học." />
                </div>
              </label>
              <div className="btn main rect" onClick={onSubmit}>đăng ký</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
