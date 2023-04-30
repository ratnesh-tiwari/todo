import React, { useState, useEffect } from "react";
import "./sass/main.scss";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Login from "./components/login/Login";
import Dashboard from "./components/todo__main/Dashboard";
import { auth } from "./firebase";

const App = () => {
  const [loginBtnClicked, setLoginBtnClicked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setIsAuthenticated(true);
      }
    });
  }, []);

  return (
    <div>
      {!isAuthenticated && <Nav setLoginBtnClicked={setLoginBtnClicked} />}
      {!isAuthenticated && <Header setLoginBtnClicked={setLoginBtnClicked} />}
      {!isAuthenticated && loginBtnClicked && (
        <Login
          setIsAuthenticated={setIsAuthenticated}
          setLoginBtnClicked={setLoginBtnClicked}
        />
      )}
      {isAuthenticated && <Dashboard setIsAuthenticated={setIsAuthenticated} />}
    </div>
  );
};

export default App;
