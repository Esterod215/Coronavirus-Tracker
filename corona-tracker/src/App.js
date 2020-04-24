import React from "react";
import styles from "./App.module.css";

import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";

import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
    country: ""
  };
  async componentDidMount() {
    console.log("called again");
    console.log("new country", this.state.country);
    if (this.state.country) {
      console.log("passed condition", this.state.country);
      const data = await fetchData(this.state.country);
      this.setState({ data: data });
    } else {
      console.log("did not pass condition", this.state.country);
      const data = await fetchData();
      this.setState({ data: data });
    }
  }
  async componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("called");
    if (prevState.country !== this.state.country) {
      const data = await fetchData(this.state.country);
      this.setState({ data: data });
    }
  }
  handleCountryChanges = newCountry => {
    console.log("country we passed in", newCountry);
    this.setState({ country: newCountry });
    console.log("new country state", this.state.country);
  };

  render() {
    return (
      <div className={styles.container}>
        <Cards data={this.state.data} />
        <CountryPicker handleCountryChanges={this.handleCountryChanges} />
        <Chart />
      </div>
    );
  }
}

export default App;
