import { Route, Switch } from "react-router-dom";
import { Coin, Infor, MyCourse, MyProject, Payment } from "./"
export function TabContent() {
  return (
    <div className="tab-content">
      <Switch>
        <Route exact path="/profile" component={Infor} />
        <Route path="/profile/mycourse" component={MyCourse} />
        <Route path="/profile/myproject" component={MyProject} />
        <Route path="/profile/payment" component={Payment} />
        <Route path="/profile/coin" component={Coin} />
      </Switch>
    </div>
  );
}
