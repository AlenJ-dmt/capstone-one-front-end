import React, { useContext, useEffect } from "react";
import "./App.css";
import Search from "./routes/search/Search";
import Results from "./routes/results/Results";
import Post from "./routes/post/Post";
import { Route, Switch } from "react-router-dom";
import Menu from "./components/menu/Menu";
import TireContext from "../src/context/tireContexts";
import WheelContext from "../src/context/wheelContext";
import TiresApiService from "../src/services/tires-api-service";
import WheelsApiService from "../src/services/wheels-api-service";

function App() {
  const wheelContext = useContext(WheelContext);
  const tireContext = useContext(TireContext);

  const setWheelAndTireParameters = () => {
    TiresApiService.getTireParameters().then((tires) =>
      tireContext.setTireOptions(
        tires.tireSize.width,
        tires.tireSize.ratio,
        tires.tireSize.diameter,
        tires.tireBrands,
        tires.quantity
      )
    );

    WheelsApiService.getWheelParameters().then((wheels) =>
      wheelContext.setWheelParameters(
        wheels.carMakes,
        wheels.carModels,
        wheels.years,
        wheels.wheelDiameter,
        wheels.wheelWidth,
        wheels.boltPatter,
        wheels.wheelBrands,
        wheels.quantity
      )
    );
  };

  useEffect (() => {
    setWheelAndTireParameters()
  }, [])

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
