import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };
  //Increment method
  handleIncrement = (product) => {
    this.setState({ value: this.state.value + 1 });
  };
  //Decrement method
  handleDecrement = (product) => {
    if (this.state.value != 0) this.setState({ value: this.state.value - 1 });
  };
  render() {
    console.log("props", this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 2 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <> </>
        <button
          onClick={() => this.handleDecrement({ id: 2 })}
          className="btn btn-secondary btn-sm"
        >
          Decrement
        </button>
      </div>
    );
  }
  //Dynamic badge color
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
  //counter value representation
  formatCount() {
    const { value } = this.state;
    return value === 0 ? <h6>zero</h6> : value;
  }
}
export default Counter;
