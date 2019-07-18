import React, { Component } from "react";
import axios from "axios";
import Cards from "./components/Cards";
import DatePicker from "react-datepicker";

export default class Data extends Component {
  // Holds State
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      data: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // Function Run on Date Change
  handleChange(date) {
    this.setState(
      {
        startDate: date
      },
      () => {}
    );
    setTimeout(
      axios
        .get(
          `https://api.nasa.gov/planetary/apod?api_key=X7831OHO7jNbCUFp6ZquUbFjI2txHRDvsbay1fU4&date=${date
            .toISOString()
            .slice(0, -14)}`
        )
        .then(response => {
          this.setState({
            data: [response.data]
          });
        }),
      3000
    );
  }

  // Initial Data
  componentDidMount() {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=X7831OHO7jNbCUFp6ZquUbFjI2txHRDvsbay1fU4&date=${this.state.startDate
          .toISOString()
          .slice(0, -14)}`
      )
      .then(response => {
        this.setState({
          data: [response.data]
        });
      });
  }

  render() {
    return (
      <>
        <h1>Select Date:</h1>
        {/* Displays Calendar */}
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
        <Cards data={this.state.data} />
      </>
    );
  }
}
