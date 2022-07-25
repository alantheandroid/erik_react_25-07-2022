import React from "react";

export class Vehicle extends React.Component {

    hpStyle = {
        backgroundColor: this.props.hp > 220 ? "red" : "blue",
        color: "white",
    }

    supplyStyle = {
        color: "white",
        backgroundColor: this.props.supply === "Electric" ? "green" : this.props.supply === "Diesel" ? "black" : this.props.supply === "Gasoline" ? "red": "blue"
    }

  render() {
    return (
      <div className="cardContainer">
        <div className="cardContainer__header">
          <span className="cardContainer__tag" style={{backgroundColor: "black", color:"white"}}>{this.props.brand}</span>
          <span className="cardContainer__tag">{this.props.model}</span>
        </div>
        <div className="cardContainer__footer">
          <div className="cardContainer__footer__left">
            <span className="cardContainer__tag" style={this.hpStyle}>{this.props.hp}</span>
            <span className="cardContainer__tag" style={this.supplyStyle}>{this.props.supply}</span>
          </div>
          <span className="cardContainer__tag">{this.props.year}</span>
        </div>
      </div>
    );
  }
}
