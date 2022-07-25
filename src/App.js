import React from "react";
import { Vehicle } from "./components/vehicle";
import { vehicleList } from "./Vehicles";

function normalizeVehicles(array) {
  const normalized = [];
  array.forEach((element) => {
    if (Array.isArray(element)) {
      normalized.push(...element);
    } else {
      normalized.push(element);
    }
  });
  return normalized;
}

export default class App extends React.Component {
  state = {
    vehicles: [],
  };

  componentDidMount() {
    this.setState({
      vehicles: normalizeVehicles(vehicleList),
    });
  }

  render() {
    return <div className="container">{this.state.vehicles.map((vehicle) => {
     return <Vehicle brand={vehicle.brand} model={vehicle.model} hp={vehicle.engine.hp} supply={vehicle.engine.supply} year={vehicle.year}/>
    })}</div>;
  }
}
