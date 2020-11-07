import React from "react";

const WheelContext = React.createContext({
  carMake: [],
  carModel: [],
  carYear: [],
  wheelDiameter: [],
  wheelWidth: [],
  boltPatter: [],
  wheelBrands: [],
  quantity: [],
  wheelList: [],
  oemWheelResults: [],
  customWheelResults: [],
  setWheelParameters: () => {},
  setWheelList: () => {},
  setOemWheelResults: () => {},
  SetCustomResults: () => {},
});

export default WheelContext;

export class WheelProvider extends React.Component {
  state = {
    carMake: [],
    carModel: [],
    carYear: [],
    wheelDiameter: [],
    wheelWidth: [],
    boltPatter: [],
    wheelBrands: [],
    quantity: [],
    wheelList: [],
    oemWheelResults: [],
    customWheelResults: [],
  };

  setWheelParameters = (
    make,
    model,
    year,
    WDiameter,
    wWidth,
    wBoltPatter,
    wheelBrands,
    quantity
  ) => {
    this.setState({
      carMake: make,
      carModel: model,
      carYear: year,
      wheelDiameter: WDiameter,
      wheelWidth: wWidth,
      boltPatter: wBoltPatter,
      wheelBrands: wheelBrands,
      quantity: quantity,
    });
  };

  setWheelList = (wheels) => {
    this.setState({
      wheelList: wheels,
    });
  };

  setOemWheelResults = (wheels) => {
    this.setState({
      oemWheelResults: wheels,
    });
  };

  SetCustomResults = (wheels) => {
    this.setState({
      customWheelResults: wheels,
    });
  };

  render() {
    const value = {
      carMake: this.state.carMake,
      carModel: this.state.carModel,
      carYear: this.state.carYear,
      wheelDiameter: this.state.wheelDiameter,
      wheelWidth: this.state.wheelWidth,
      boltPatter: this.state.boltPatter,
      wheelBrands: this.state.wheelBrands,
      quantity: this.state.quantity,
      wheelList: this.state.wheelList,
      oemWheelResults: [],
      customWheelResults: [],
      setWheelParameters: this.setWheelParameters,
      setWheelList: this.setWheelList,
      setOemWheelResults: this.setOemWheelResults,
      SetCustomResults: this.SetCustomResults,
    };

    return (
      <WheelContext.Provider value={value}>
        {this.props.children}
      </WheelContext.Provider>
    );
  }
}
