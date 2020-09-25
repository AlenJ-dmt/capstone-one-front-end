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
  setWheelParameters: () => {},
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
      setWheelParameters: this.setWheelParameters
    };

    return (
      <WheelContext.Provider value={value}>
        {this.props.children}
      </WheelContext.Provider>
    );
  }
}
