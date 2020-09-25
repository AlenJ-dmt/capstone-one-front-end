import React from "react";

const TireContext = React.createContext({
  width: [],
  ratio: [],
  diameter: [],
  brands: [],
  quantity: [],
  setTireSizeOptions: () => {},
  setTireOptions: () => {},
});

export default TireContext;

export class TireProvider extends React.Component {
  state = {
    width: [],
    ratio: [],
    diameter: [],
    brands: [],
    quantity: [],
  };

  setTireOptions = (tireWidth, tireRatio, tireDiameter, tireBrands, tireQuantity) => {
    this.setState({
      width: tireWidth,
      ratio: tireRatio,
      diameter: tireDiameter,
      brands: tireBrands,
      quantity: tireQuantity
    });
  };

  render() {
    const value = {
      width: this.state.width,
      ratio: this.state.ratio,
      diameter: this.state.diameter,
      brands: this.state.brands,
      quantity: this.state.quantity,
      setTireOptions: this.setTireOptions
    };
    return (
      <TireContext.Provider value={value}>
        {this.props.children}
      </TireContext.Provider>
    );
  }
}
