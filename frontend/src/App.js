// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Test from "./components/test";
import HomePage from "./components/Home";
import ImageBrowser from "./components/Images";
import { getImages } from "./store/image";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser())
    .then(() =>dispatch(getImages()))
    .then(() => setIsLoaded(true));

  }, [dispatch]);

  return isLoaded &&(
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          {/* <Route path="/login">
            <LoginFormPage />
          </Route> */}
          <Route path="/" exact>
            <HomePage/>
          </Route>
          <Route path="/images">
            <ImageBrowser/>
          </Route>
          <Route path="/test">
            <Test/>
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
    </>

  );
}

export default App;
