// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from "./components/Home";
import ImageBrowser from "./components/ShowImages";
import { getImages } from "./store/image";
import CreateImage from "./components/CreateImage";
import EditImage from "./components/EditImage";
import { getAlbums } from "./store/album";
import AlbumBrowser from "./components/ShowAlbum";
import EditAlbum from "./components/EditAlbum";
import ShowImage from "./components/ShowImage"
import UserImages from "./components/UserImage";
import { getComments } from "./store/comment";
import {Helmet} from "react-helmet"
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser())
    .then(() => dispatch(getImages()))
    .then(() => dispatch(getAlbums()))
    .then(() => dispatch(getComments()))
    .then(() => setIsLoaded(true));

  }, [dispatch]);

  return isLoaded &&(
    <>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Nat-Parkr</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <meta name="description" content="Title and Icon" />
      </Helmet>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/" exact>
            <HomePage/>
          </Route>
          <Route path="/images" exact>
            <ImageBrowser/>
          </Route>
          <Route path="/images/:imageId">
            <ShowImage/>
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
          <Route path="/myimages">
            <UserImages/>
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
