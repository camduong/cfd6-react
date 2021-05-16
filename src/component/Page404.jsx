import { Link } from "react-router-dom";
import useDelayLink from "../hook/useDelayLink";

export function Page404() {
  let delayLink = useDelayLink()
  return (
    <main className="notfound" id="main">
      <div className="container">
        <section>
          <h2 className="main-title">404</h2>
          <p>Không tìm thấy trang</p>
          <Link onClick={delayLink} to="/" className="btn main round">Trang chủ</Link>
        </section>
      </div>
    </main>
  )
}