import React from "react";
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
    return <div></div>;
  }
}
