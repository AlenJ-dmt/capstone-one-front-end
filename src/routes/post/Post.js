import React from "react";
import SelectElement from "../../components/SelectElement";
import colors from "../../constants/colors";
import "./post.css";
import ToggleButton from "../../components/toggleButton/toggleButton";
import AddTire from "../../components/addTire/AddTire";
import AddOemWheel from "../../components/addWheel/AddOemWheel";
import AddCustomWheel from "../../components/addWheel/AddCustomWheel";

class Post extends React.Component {
  state = {
    searchType: "",
    toggleButtonOptions: ["", ""],
    toggleState: "left",
    tiresColor: colors.postBlue,
    wheelsColor: colors.postBlue,
  };

  selectPosttype = (mySearchType, myToggleOptionLeft, myToggleOptionRight) => {
    this.setState({
      searchType: mySearchType,
      toggleButtonOptions: [myToggleOptionLeft, myToggleOptionRight],
      tiresColor:
        mySearchType === "Tires" ? colors.selectedBlue : colors.postBlue,
      wheelsColor:
        mySearchType === "Wheels" ? colors.selectedBlue : colors.postBlue,
    });
  };

  render() {
    return (
      <>
        <section id="post-section">
          <h1>Post</h1>
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
            selectType={this.selectPosttype}
            tiresColor={this.state.tiresColor}
            wheelsColor={this.state.wheelsColor}
          />
          {this.state.searchType === "Tires" && (
            <AddTire
              condition={this.state.toggleState === "left" ? "used" : "new"}
            />
          )}
          {this.state.searchType === "Wheels" &&
            this.state.toggleState === "left" && <AddOemWheel />}
          {this.state.searchType === "Wheels" &&
            this.state.toggleState === "right" && <AddCustomWheel />}
        </section>
      </>
    );
  }
}

export default Post;
