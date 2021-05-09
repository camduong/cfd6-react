import { Route, Switch } from "react-router-dom";
import { Coin, Infor, MyCourse, MyProject, Payment } from "./"
export function TabContent({path}) {
  return (
    <div className="tab-content">
      <Switch>
        <Route exact path={`${path}`} component={Infor} />
        <Route path={`${path}/mycourse`} component={MyCourse} />
        <Route path={`${path}/myproject`} component={MyProject} />
        <Route path={`${path}/payment`} component={Payment} />
        <Route path={`${path}/coin`} component={Coin} />
      </Switch>
    </div>
  );
}
