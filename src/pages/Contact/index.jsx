import useFormValidate from "../../hook/useFormValidate";

export default function Contact() {
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
      <section className="section-1 wrap container">
        <h2 className="main-title">HỢP TÁC CÙNG CFD</h2>
        <p className="top-des">
          Đừng ngần ngại liên hệ với <strong>CFD</strong> để cùng nhau tạo ra
          những sản phẩm giá trị, cũng như việc hợp tác với các đối tác tuyển
          dụng và công ty trong và ngoài nước.
        </p>
        <div className="form">
          <label>
            <p>
              Họ và tên<span>*</span>
            </p>
            <input type="text" placeholder="Họ và tên bạn" />
          </label>
          <label>
            <p>Số điện thoại</p>
            <input type="text" placeholder="Số điện thoại" />
          </label>
          <label>
            <p>
              Email<span>*</span>
            </p>
            <input type="text" placeholder="Email của bạn" />
          </label>
          <label>
            <p>Website</p>
            <input type="text" placeholder="Đường dẫn website http://" />
          </label>
          <label>
            <p>
              Tiêu đề<span>*</span>
            </p>
            <input type="text" placeholder="Tiêu đề liên hệ" />
          </label>
          <label>
            <p>
              Nội dung<span>*</span>
            </p>
            <textarea name id cols={30} rows={10} defaultValue={""} />
          </label>
          <div className="btn main rect">đăng ký</div>
        </div>
      </section>
    </main>
  );
}
