// common react
import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom";

// common component
import { Header, Footer, Page404 } from "./component";

// pages
import CourseDetail from "./pages/CoureDetail";
import CoursePage from "./pages/Course";
import Home from './pages/Home'
import Profile from "./pages/Profile";
import Project from "./pages/Project";
import Register from "./pages/Register";
import Team from './pages/Team'
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";

// style
import './scss/style.sass';
import PopupLogin from "./component/PopupLogin";

export let Context = React.createContext({})

function App() {
  let login = {
    name: "Huỳnh Cẩm Đường",
    avatar: '/assets/img/avatar-lg.png'
  }
  return (
    <Context.Provider value={{}}>
      <BrowserRouter>
        <div className="App">
          <PopupLogin />
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/team' component={Team} />
            <Route path='/project' component={Project} />
            <Route exact path='/course' component={CoursePage} />
            <Route path='/course/:slug' component={CourseDetail} />
            <Route path='/register' component={Register} />
            <Route path='/profile'>
              <Profile />
            </Route>
            <Route path='/contact' component={Contact} />
            <Route path='/faq' component={FAQ} />
            <Route component={Page404} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
