import React, { useState } from "react";
import Login from "./Section-Login/Login";
import Register from "./Section-Login/Register";
import MainPage from './Section-Main/MainPage';
import {
    Route,
    Switch
} from "react-router-dom";
import { ProtectedRoute } from '../utilities/ProtectedRoute';
import UserContext from '../utilities/userContext';
import Diet from "./Section-Main/Diet";
import Calendar from "./Section-Main/Calendar";
import Preferences from "./Section-Main/Preferences";
import Q_A from "./Section-Main/Q_A";

const App = () => {
  const [user, setUser] = useState('');

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/rejestracja" component={Register} />
          <ProtectedRoute path="/sledz-ciaze" component={MainPage} />
          <ProtectedRoute path="/kalendarz" component={Calendar} />
          <ProtectedRoute path="/pytania-i-odpowiedzi" component={Q_A} />
          <ProtectedRoute path="/dieta" component={Diet} />
          <ProtectedRoute path="/preferencje" component={Preferences} />
          <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </UserContext.Provider>
  )
}


export default App;
