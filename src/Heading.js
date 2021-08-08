import React from "react";

class Heading extends React.Component {
  render() {
    return (
      <div>
        <h1 className="align-center pb1">{this.props.text}</h1>
      </div>
    );
  }
}

export default Heading;
