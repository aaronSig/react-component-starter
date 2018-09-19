import * as React from "react";

interface IProps {
  message: string;
}

class Greeter extends React.Component<IProps> {
  public render() {
    return <h1>Hello world! {this.props.message}</h1>;
  }
}

export default Greeter;
