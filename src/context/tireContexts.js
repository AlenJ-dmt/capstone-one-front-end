import React from "react";

const TireContext = React.createContext({
  width: [],
  ratio: [],
  diameter: [],
  brands: [],
  quantity: [],
  tiresResults: [],
  setTireOptions: () => {},
  setTireResults: () => {}
});

export default TireContext;

export class TireProvider extends React.Component {
  state = {
    width: [],
    ratio: [],
    diameter: [],
    brands: [],
    quantity: [],
    tiresResults: []
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

  setTireResults = (tires) =>{
    this.setState({
      tiresResults: tires
    })
  }
  render() {
    const value = {
      width: this.state.width,
      ratio: this.state.ratio,
      diameter: this.state.diameter,
      brands: this.state.brands,
      quantity: this.state.quantity,
      setTireOptions: this.setTireOptions,
      tiresResults: this.state.tiresResults,
      setTireResults: this.setTireResults
    };
    return (
      <TireContext.Provider value={value}>
        {this.props.children}
      </TireContext.Provider>
    );
  }
}
