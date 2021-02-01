import React from "react";
import Items from "../Items/Items";
import "./ItemContainer.css";
import first from "../../assets/Desktop-Model3.jpeg";
import second from "../../assets/Desktop-ModelS.jpeg";
import third from "../../assets/Desktop-ModelX.jpeg";
import forth from "../../assets/Desktop-ModelY.jpeg";
import fifth from "../../assets/Desktop-SolarPanels.jpeg";
import sixth from "../../assets/Desktop-SolarRoof.jpeg";
import seventh from "../../assets/Desktop-Accessories.jpg";

function ItemContainer() {
  return (
    <div className="itemcontainer">
      <Items
        title="Model 3"
        desc="Order online for "
        main="Touchless Delivery"
        leftbtn="custom order"
        rightbtn="existing inventory"
        background={first}
        condition="true"
        button="white"
        arrow="true"
      />
      <Items
        title="Model S"
        desc="Order online for "
        main="Touchless Delivery"
        leftbtn="custom order"
        rightbtn="learn more"
        background={second}
        condition="true"
        button="white"
      />
      <Items
        title="Model X"
        desc="Order online for "
        main="Touchless Delivery"
        leftbtn="custom order"
        rightbtn="existing inventory"
        background={third}
        condition="true"
        button="white"
      />
      <Items
        title="Model Y"
        desc="Order online for "
        main="Touchless Delivery"
        leftbtn="custom order"
        rightbtn="existing inventory"
        background={forth}
        condition="true"
        button="white"
      />
      <Items
        title="Lowest Cost Solar Panels in America"
        desc="Money-back guarantee"
        leftbtn="custom order"
        rightbtn="learn more"
        background={fifth}
        condition="true"
        button="white"
      />
      <Items
        title="Solar for New Roofs"
        desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        leftbtn="order now"
        rightbtn="learn more"
        background={sixth}
        condition="true"
        button="white"
      />
      <Items
        title="Accessories"
        desc="Order online for Touchless Delivery"
        leftbtn="shop now"
        rightbtn="learn more"
        background={seventh}
      />
    </div>
  );
}

export default ItemContainer;
