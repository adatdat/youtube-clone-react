import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import HomeScreen from "./screen/HomeScreen";
import Sidebar from "./components/sideBar/Sidebar";
import LoginScreen from "./screen/loginScreen/LoginScreen";
import { useSelector } from "react-redux";

import { Route, Switch, Redirect, useHistory } from "react-router-dom";

import "./_app.scss";
import WatchScreen from "./screen/watchScreen/WatchScreen";

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar((value) => !value);

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app_container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app_main">
          {children}
        </Container>
      </div>
    </>
  );
};

const App = () => {
  const { accessToken, loading } = useSelector((state) => state.auth);

  const history = useHistory();

  useEffect(() => {
    if (!loading && !accessToken) {
      history.push("/auth");
    }
  }, [accessToken, loading, history]);

  return (
    <Switch>
      <Route path="/" exact>
        <Layout>
          <HomeScreen />
        </Layout>
      </Route>
      <Route path="/auth">
        <LoginScreen />
      </Route>
      <Route path="/search">
        <Layout>
          <p>Search me</p>
        </Layout>
      </Route>
      <Route path="/watch/:id">
        <Layout>
          < WatchScreen />
        </Layout>
      </Route>
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default App;
