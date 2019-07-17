import React, { Component } from "react";
import "react-datepicker/dist/react-datepicker.css";

export default class Objects extends Component {
  render() {
    if (!this.props.data) {
      return <h1>Loading...</h1>;
    }
    return (
      <div className="card">
        {/* Title */}
        <h1>{this.props.data[0].title}</h1>
        {/* Youtube Video */}
        {this.props.data[0].url.includes("image") ? (
          <img src={this.props.data[0].url} alt="Space Img" />
        ) : (
          // Embeded Youtube Video
          <iframe
            title="video"
            src={this.props.data[0].url}
            width="560"
            height="315"
            frameBorder="0"
            allowFullScreen
            align="middle"
          />
        )}

        {/* Description */}
        <p>{this.props.data[0].explanation}</p>
        {/* <Placeholder dates={this.state.startDate} /> */}
      </div>
    );
  }
}
