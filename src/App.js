import React from "react";
import { Switch, Route } from "react-router-dom";
import List from "./list";
import tile from "./tile";

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={List} />
      <Route path='/open/:place' component={tile} />
    </Switch>
  );
};

export default App;
