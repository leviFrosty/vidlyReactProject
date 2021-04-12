import React, { Component } from "react";
import Counter from "./counter";

// Example props to pass:

{
  /* <Counters
counters={this.state.counters}
onReset={this.handleReset}
onIncrement={this.handleIncrement}
onDelete={this.handleDelete}
handleDecrement={this.handleDecrement}
/> */
}

class Counters extends Component {
  render() {
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      handleDecrement,
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
            onDecrement={handleDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
