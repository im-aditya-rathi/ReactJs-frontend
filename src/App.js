import {React, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

// ######################    !!!   ALL LINKS   !!!    #######################
import Home from './home/Home';
import Login from './login/Login';
import Signup from './signup/Signup';
import Forgetpass from './forget/Forgetpass';
import Resetpass from './forget/Resetpass';
import Profile from './user/Profile';
import Postjob from './user/Postjob';
import Application from './user/Application';
import Test from './user/Test';

// ######################    !!!   ERROR PAGE   !!!    #######################
import Error from './error/Error';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"




function App() {

  // useEffect(() => {
  //   console.log("page loaded");
  //   setTimeout(() => {
  //     console.log("reloaded");   
  //   }, 300);
  // }, [])


  return (
    <>
      <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/login' component={Login}></Route>
      <Route exact path='/signup' component={Signup}></Route>
      <Route exact path='/forgetpass' component={Forgetpass}></Route>
      <Route exact path='/resetpass' component={Resetpass}></Route>
      <Route exact path='/profile' component={Profile}></Route>
      <Route exact path='/postjob' component={Postjob}></Route>
      <Route exact path='/application' component={Application}></Route>
      <Route exact path='/test' component={Test}></Route>
      <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;