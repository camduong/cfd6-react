// common react
import React, { useEffect, useState } from "react"
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
import PrivateRoute from "./component/PrivateRoute";
import Auth from "./service/auth";

export let Context = React.createContext({})

function App() {
  // let login = {
  //   name: "Huỳnh Cẩm Đường",
  //   avatar: '/assets/img/avatar-lg.png'
  // }
  let [state, setState] = useState({
    login: JSON.parse(localStorage.getItem('login'))
  })

  useEffect(() => {
    localStorage.setItem('login', JSON.stringify(state.login))
  }, [state.login])

  async function handleLogin(username, password) {
    try {
      let res = await Auth.login({ username, password })

      if (res.data) {
        setState({
          ...state,
          login: res.data
        })
        return {
          success: true
        }
      } else if (res.error) {
        return {
          error: res.error
        }
        // setState({
        //   ...state,
        //   loginError: res.error
        // })
      }
    }
    catch (err) {

    }
    // fetch('http://cfd-reactjs.herokuapp.com/elearning/v4/login',{
    //   method: 'POST',
    //   body: JSON.stringify({
    //     username,
    //     password
    //   }),
    //   headers:{
    //     "Content-Type": "application/json"
    //   }
    // })
    // .then(res=>{
    //   console.log('success', res)
    //   return res.json()
    // })
    // .then(res=>{
    //   console.log(res)
    //   if(res.data){
    //     setState({
    //       ...state,
    //       login: res.data
    //     })
    //     callback()
    //   }else if(res.error){
    //     setState({
    //       ...state,
    //       loginError: res.error
    //     })
    //   }
    // })
    // .catch(err => {
    //   console.log('error',err)
    // })

    // if (username === 'admin@gmail.com' && password === '123456') {
    //   setState({
    //     ...state,
    //     login: {
    //       name: "Huỳnh Cẩm Đường",
    //       avatar: '/assets/img/avatar-lg.png'
    //     }
    //   })
    // } else {
    //   return 'sai thông tin đăng nhập'
    // }
  }
  function handleLogout() {
    setState({
      ...state,
      login: false
    })
  }
  return (
    <Context.Provider value={{ ...state, handleLogin, handleLogout }}>
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
            <PrivateRoute path='/profile' component={Profile} />
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
