import React from "react";
import "./App.css";
import Search from "./routes/search/Search";
import Results from "./routes/results/Results";
import Post from "./routes/post/Post"
import { Route, Switch } from "react-router-dom";
import Menu from './components/menu/Menu'

function App() {
  return (
    <>
      <Switch>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/results">
          <Results />
        </Route>
        <Route path="/post">
          <Post />
        </Route>
      </Switch>
      <Menu />
    </>
  );
}

export default App;
