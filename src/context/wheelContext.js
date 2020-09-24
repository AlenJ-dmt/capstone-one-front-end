import React from "react";

const WheelContext = React.createContext({
  carMake: [],
  carModel: [],
  carYear: [],
  setOemWheelSearchParameters: () => {},
});

export default WheelContext;

export class WheelProvider extends React.Component {
  state = {
    carMake: [],
    carModel: [],
    carYear: [],
  };

  setOemWheelSearchParameters = (make, model, year) => {
      this.setState({
        carMake: make,
        carModel: model,
        carYear: year,
      })
  }

  render(){
      const value ={
        carMake: this.state.carMake,
        carModel: this.state.carModel,
        carYear: this.state.carYear,
        setOemWheelSearchParameters: this.setOemWheelSearchParameters,
      }

      return(
          <WheelContext.Provider value={value}>
              {this.props.children}
          </WheelContext.Provider>
      )
  }
}
