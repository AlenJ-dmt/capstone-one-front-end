import React from "react";

const TireContext = React.createContext({
  width: [],
  ratio: [],
  diameter: [],
  setTireSizeOptions: () => {}
});

export default TireContext;

export class TireProvider extends React.Component {
  state = {
    width: [],
    ratio: [],
    diameter: [],
    
  };

  setTireSizeOptions = (tireWidth, tireRatio, tireDiameter) => {
      this.setState({
        width: tireWidth,
        ratio: tireRatio,
        diameter: tireDiameter,
      })
  }

  render(){
      const value = {
        width: this.state.width,
        ratio: this.state.ratio,
        diameter: this.state.diameter,
        setTireSizeOptions: this.setTireSizeOptions
      }
      return(
          <TireContext.Provider value={value} >
              {this.props.children}
          </TireContext.Provider>
      )
  }
}
