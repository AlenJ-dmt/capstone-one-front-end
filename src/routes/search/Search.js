import React from "react";
import "./search.css";
import CustomButton from "../../components/button/CustomButton";
import TireSearch from "../../components/tireSearch/TireSearch";
import OemWheelSearch from "../../components/wheelSearch/OemWheelSearch";
import CustomWheelSearch from '../../components/wheelSearch/CustomWheelSearch'

class Search extends React.Component {
  state = {
    searchType: "",
    toggleButtonOptions: ["", ""],
    toggleState: "left",
  };

  selectSearchtype = (
    mySearchType,
    myToggleOptionLeft,
    myToggleOptionRight
  ) => {
    this.setState({
      searchType: mySearchType,
      toggleButtonOptions: [myToggleOptionLeft, myToggleOptionRight]
    });
  };

  render() {
    return (
      <section id="search-section">
        <h1>Search</h1>
        {/* //////////////Conditional Toggle Button ///////////////  */}
        {this.state.searchType !== "" && (
          <div className="toggle-button-container">
            <span> {this.state.toggleButtonOptions[0]} </span>
            <label className="switch">
              <input
                type="checkbox"
                onClick={() =>
                  this.setState({
                    toggleState:
                      this.state.toggleState === "left" ? "right" : "left",
                  })
                }
              />
              <span className="slider round"></span>
            </label>
            <span> {this.state.toggleButtonOptions[1]} </span>
          </div>
        )}
        <h2>Please select one</h2>
        <div id="button-container">
          <CustomButton
            onClickDo={() => this.selectSearchtype("Tires", "Used", "New")}
            buttonType={"Search"}
          >
            Tires
          </CustomButton>
          <CustomButton
            onClickDo={() => this.selectSearchtype("Wheels", "OEM", "Custom")}
            buttonType={"Search"}
          >
            Wheels
          </CustomButton>
        </div>
        {this.state.searchType === "Tires" && <TireSearch />}
        {(this.state.searchType === "Wheels" && this.state.toggleState === 'left') && <OemWheelSearch />}
        {(this.state.searchType === "Wheels" && this.state.toggleState === 'right') && <CustomWheelSearch />}
        <button id="search-button">Search</button>
      </section>
    );
  }
}

export default Search;