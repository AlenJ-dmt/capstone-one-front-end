import React from "react";
import SelectElement from "../../components/SelectElement";
import colors from "../../constants/colors";
import "./inventory.css";
import TireContext from "../../context/tireContexts";
import ItemBlock from "../../components/ItemBlock/ItemBlock";
import TireService from "../../services/tires-api-service";

class Inventory extends React.Component {
  static contextType = TireContext;

  state = {
    itemType: "",
    tiresColor: colors.postBlue,
    wheelsColor: colors.postBlue,
    tireList: [],
    wheelList: [],
  };

  setTireList = () => {
    TireService.getAllTires().then((tires) =>
      this.setState({
        tireList: tires,
      })
    );
  };

  selectType = (selectedItem) => {
    if (selectedItem == "Tires") {
      this.setTireList();
    }
    this.setState({
      itemType: selectedItem,
      tiresColor:
        selectedItem === "Tires" ? colors.selectedBlue : colors.postBlue,
      wheelsColor:
        selectedItem === "Wheels" ? colors.selectedBlue : colors.postBlue,
    });
  };

  inventoryList = (itemType) => {
      return this.state.tireList.map((tire) => 
        <ItemBlock backgroundColor={colors.postBlue}
        title={tire.brand} 
        size={tire.size}
        quantity={tire.quantity}
        />
      );
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
          
             { this.state.itemType == 'Tires' && this.inventoryList("Tires") }
          
        </section>
      </>
    );
  }
}

export default Inventory;
