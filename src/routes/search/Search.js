import React from "react";
import "./search.css";
import TireSearch from "../../components/tireSearch/TireSearch";
import OemWheelSearch from "../../components/wheelSearch/OemWheelSearch";
import CustomWheelSearch from "../../components/wheelSearch/CustomWheelSearch";
import SelectElement from "../../components/SelectElement";
import colors from "../../constants/colors";
import ToggleButton from "../../components/toggleButton/toggleButton";

class Search extends React.Component {
  state = {
    searchType: "",
    toggleButtonOptions: ["", ""],
    toggleState: "left",
    tiresColor: colors.searchRed,
    wheelsColor: colors.searchRed,
  };

  selectSearchtype = (
    mySearchType,
    myToggleOptionLeft,
    myToggleOptionRight
  ) => {
    this.setState({
      searchType: mySearchType,
      toggleButtonOptions: [myToggleOptionLeft, myToggleOptionRight],
      tiresColor:
        mySearchType === "Tires" ? colors.selectedRed : colors.searchRed,
      wheelsColor:
        mySearchType === "Wheels" ? colors.selectedRed : colors.searchRed,
    });
  };

  render() {
    return (
      <section id="search-section">
        <h1>Search</h1>
        {this.state.searchType !== "" && (
          <ToggleButton
            toggleButtonOptions={this.state.toggleButtonOptions}
            setToggleState={() =>
              this.setState({
                toggleState:
                  this.state.toggleState === "left" ? "right" : "left",
              })
            }
          />
        )}
        <SelectElement
          tiresColor={this.state.tiresColor}
          wheelsColor={this.state.wheelsColor}
          selectType={this.selectSearchtype}
        />
        {this.state.searchType === "Tires" && (
          <TireSearch
            condition={this.state.toggleState === "left" ? "used" : "new"}
          />
        )}
        {this.state.searchType === "Wheels" &&
          this.state.toggleState === "left" && <OemWheelSearch />}
        {this.state.searchType === "Wheels" &&
          this.state.toggleState === "right" && <CustomWheelSearch />}
      </section>
    );
  }
}

export default Search;
