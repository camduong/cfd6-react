import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header, Footer } from "./component";


import CourseDetail from "./pages/CoureDetail";
import CoursePage from "./pages/course";
import Home from './pages/home'
import Profile from "./pages/Profile";
import Project from "./pages/project";
import Register from "./pages/Register";
import Team from './pages/team'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/course' component={CoursePage} />
          <Route path='/team' component={Team} />
          <Route path='/project' component={Project} />
          <Route path='/course-detail' component={CourseDetail} />
          <Route path='/register' component={Register} />
          <Route path='/profile' component={Profile} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
