import React, { Component } from "react";

export default class Detail extends Component {
  //chay sau render 1 lan duy nhat
  componentDidMount() {
    console.log(this.props);
    const id = this.props.match.params.id;
    console.log(id);
  }
  render() {
    return <div>Detail</div>;
  }
}
