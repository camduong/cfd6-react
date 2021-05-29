import { useDispatch, useSelector } from "react-redux";
import useAuth from "../../../hook/useAuth";
import useFormValidate from "../../../hook/useFormValidate";
import { updateAction } from "../../../redux/actions/authAction";

export function Infor() {
  let { login } = useSelector(store => store.auth)
  console.log(login)
  let { form, error, inputChange, check } = useFormValidate({
    name: login.name,
  }, {
    rule: {
      name: {
        required: true
      }
    },
    message: {
      name: {
        required: "Họ và tên không được để trống"
      }
    }
  })
  let dispatch = useDispatch()
  function handleUpdate() {
    let error = check()
    if (Object.keys(error).length === 0) {
      dispatch(updateAction(form))
    }
  }
  return (
    <div className="tab1">
      <label>
        <p>
          Họ và tên<span>*</span>
        </p>
        <input onChange={inputChange} name='name' type="text" placeholder={login.first_name} value={form.name} />
        {
          error.name && <p className="error-text">{error.name}</p>
        }
      </label>
      <label>
        <p>
          Số điện thoại<span>*</span>
        </p>
        <input type="text" placeholder="0949******" />
      </label>
      <label>
        <p>
          Email<span>*</span>
        </p>
        <input defaultValue={login.email} disabled type="text" />
      </label>
      <label>
        <p>
          Facebook<span>*</span>
        </p>
        <input type="text" placeholder="Facebook url" />
      </label>
      <label>
        <p>
          Skype<span>*</span>
        </p>
        <input type="text" placeholder="Skype url" />
      </label>
      <div className="btn main rect" onClick={handleUpdate}>LƯU LẠI</div>
    </div>
  );
}
