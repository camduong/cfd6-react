import { useContext } from "react";
import { Redirect, useRouteMatch } from "react-router-dom";
import { Context } from "../../App";
import { TabTitle } from "./component";
import { TabContent } from "./component/TabContent";



export default function Profile(){
  let {path} = useRouteMatch()
  let {login} = useContext(Context)
  if(!login) return <Redirect path='/' />
  return(
    <main className="profile" id="main">
      <section>
        <div className="top-info">
          <div className="avatar">
            <img src={login.avatar} alt="" />
            <div className="camera" />
          </div>
          <div className="name">{login.name}</div>
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