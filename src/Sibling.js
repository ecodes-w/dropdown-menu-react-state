import React from "react";

export class Sibling extends React.Component {
  render() {
    const name = this.props.name;
    return (
      <div>
        <p>Hey, my name is {name}</p>
        <p>Don't you think {name} is the prettiest name ever?</p>
        <p>Sure am glad that my parents picked {name}!</p>
      </div>
    );
  }
}
