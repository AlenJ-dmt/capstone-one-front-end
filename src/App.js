import React, { useContext, useEffect } from "react";
import "./App.css";
import Home from "./routes/home/Home";
import Search from "./routes/search/Search";
import Results from "./routes/results/Results";
import Post from "./routes/post/Post";
import Inventory from "./routes/inventory/Inventory";
import ItemDetails from "./routes/itemDetails/ItemDetails";

import { Route, Switch } from "react-router-dom";
import Menu from "./components/menu/Menu";
import TireContext from "../src/context/tireContexts";
import WheelContext from "../src/context/wheelContext";
import TiresApiService from "../src/services/tires-api-service";
import WheelsApiService from "../src/services/wheels-api-service";
import OemWheelDetails from "./routes/itemDetails/OemWheelDetails"

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

    WheelsApiService.getAllWheels().then((wheels) => {
      wheelContext.setWheelList(wheels);
    });

    TiresApiService.getAllTires().then((tires) =>
      tireContext.setTireList(tires)
    );
  };

  useEffect(() => {
    setWheelAndTireParameters();
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/search" render={(props) => <Search {...props} />} />
        <Route
          exact
          path="/tires/:tireId"
          render={(props) => <ItemDetails />}
        />
        <Route
          exact
          path="/oemWheels/:oemWheelId"
          render={(props) => <OemWheelDetails />}
        />
        <Route
          exact
          path="/customWheels/:customWheelId"
          render={(props) => <ItemDetails />}
        />
        <Route exact path="/tiresResults">
          <Results type='tires' />
        </Route>
        <Route exact path="/oemWheelResults">
          <Results type='oemWheels' />
        </Route>
        <Route exact path="/customWheelResults">
          <Results oem='customWheels' />
        </Route>
        <Route exact path="/post">
          <Post />
        </Route>
        <Route exact path="/inventory">
          <Inventory />
        </Route>
      </Switch>
      <Menu />
    </>
  );
}

export default App;
