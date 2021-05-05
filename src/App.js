import React from "react"

import { Header, Footer } from './component'
import CourseDetail from "./pages/CoureDetail";
import CoursePage from "./pages/course";
import Home from './pages/home'
import Project from "./pages/project";
import Team from './pages/team'

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      {/* <Team /> */}
      {/* <Project /> */}
      {/* <CoursePage /> */}
      <CourseDetail />
      <Footer />
    </div>
  );
}

export default App;
