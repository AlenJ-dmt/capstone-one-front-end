import React from "react";
import SelectElement from "../../components/SelectElement";
import colors from "../../constants/colors";
import "./inventory.css";
import TireContext from "../../context/tireContexts";
import ItemBlock from "../../components/ItemBlock/ItemBlock";
import TireList from '../../components/TiresList'
import WheelList from "../../components/WheelList"


class Inventory extends React.Component {
  static contextType = TireContext;

  state = {
    itemType: "",
    tiresColor: colors.postBlue,
    wheelsColor: colors.postBlue,
    wheelList: [],
  };

  selectType = (selectedItem) => {
    this.setState({
      itemType: selectedItem,
      tiresColor:
        selectedItem === "Tires" ? colors.selectedBlue : colors.postBlue,
      wheelsColor:
        selectedItem === "Wheels" ? colors.selectedBlue : colors.postBlue,
    });
  };


  render() {
    return (
      <>
        <section id="inventory-section">
          <h1>Inventory</h1>
          <SelectElement
            selectType={this.selectType}
            tiresColor={this.state.tiresColor}
            wheelsColor={this.state.wheelsColor}
          />
          
             { this.state.itemType === 'Tires' && <TireList/> }
             { this.state.itemType === 'Wheels' && <WheelList/> }
          
        </section>
      </>
    );
  }
}

export default Inventory;
