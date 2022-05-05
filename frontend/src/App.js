// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import SignupFormPage from "./components/SignupFormModal";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from "./components/Home";
import ImageBrowser from "./components/ShowImages";
import { getImages } from "./store/image";
import CreateImage from "./components/CreateImage";
import EditImage from "./components/EditImage";
import { getAlbums } from "./store/album";
import CreateAlbum from "./components/CreateAlbum";
import AlbumBrowser from "./components/ShowAlbum";
import SignupForm from "./components/SignupFormModal/SignupForm";
import EditAlbum from "./components/EditAlbum";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser())
    .then(() => dispatch(getImages()))
    .then(() => dispatch(getAlbums()))
    .then(() => setIsLoaded(true));

  }, [dispatch]);

  return isLoaded &&(
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/" exact>
            <HomePage/>
          </Route>
          <Route path="/images">
            <ImageBrowser/>
          </Route>
          <Route path="/createimage">
            <CreateImage/>
          </Route>
          <Route path="/editimage/:imageId">
            <EditImage/>
          </Route>
          <Route path="/albums">
            <AlbumBrowser/>
          </Route>
          <Route path="/createalbum">
            <CreateAlbum/>
          </Route>
          <Route path="/editalbum/:albumId">
            <EditAlbum/>
          </Route>

        </Switch>
      )}
    </>

  );
}

export default App;
