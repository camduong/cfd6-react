import { useRouteMatch } from "react-router";
import { TabTitle } from "./component";
import { TabContent } from "./component/TabContent";

export default function Profile(){
  let { path } = useRouteMatch()
  return(
    <main className="profile" id="main">
      <section>
        <div className="top-info">
          <div className="avatar">
            <img src="/assets/img/avatar-lg.png" alt="" />
            <div className="camera" />
          </div>
          <div className="name">trần nghĩa</div>
          <p className="des">Thành viên của team CFD1-OFFLINE</p>
        </div>
        <div className="container">
          <div className="tab">
            <TabTitle path={path}/>
            <TabContent path={path}/>
          </div>
        </div>
      </section>
    </main>
  )
}