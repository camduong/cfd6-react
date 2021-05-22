import { useContext } from "react";
import { Context } from "../../../App";

export function Infor() {
  let {login} = useContext(Context)
  return (
    <div className="tab1">
      <label>
        <p>
          Họ và tên<span>*</span>
        </p>
        <input type="text" placeholder={login.name} />
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
        <input defaultValue="vuong.dang@dna.vn" disabled type="text" />
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
      <div className="btn main rect">LƯU LẠI</div>
    </div>
  );
}
