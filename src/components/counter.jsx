import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-lg-1">
              <div className={this.getBadgeClass()}>{this.formatCount()}</div>
            </div>
            <div class="col">
              <div>
                <button
                  onClick={() => this.props.onIncrement(this.props.counter)}
                  className="btn btn-sm btn-secondary"
                >
                  +
                </button>

                <button
                  onClick={() => this.props.onDecrement(this.props.counter)}
                  className="btn btn-secondary btn-sm m-2"
                  disabled={this.props.counter.value === 0 ? "disabled" : ""}
                >
                  -
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => this.props.onDelete(this.props.counter.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  getBadgeClass = () => {
    let classes = "badge text-white m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
