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
    if (this.state.country) {
      const data = await fetchData(this.state.country);
      this.setState({ data: data });
    } else {
      const data = await fetchData();
      this.setState({ data: data });
    }
  }
  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.country !== this.state.country) {
      const data = await fetchData(this.state.country);
      this.setState({ data: data });
    }
  }
  handleCountryChanges = newCountry => {
    this.setState({ country: newCountry });
  };

  render() {
    return (
      <div className={styles.container}>
        <img
          src="https://i.ibb.co/7QpKsCX/image.png"
          alt="COVID-19"
          className={styles.image}
        />
        <Cards data={this.state.data} />
        <CountryPicker handleCountryChanges={this.handleCountryChanges} />
        <Chart data={this.state.data} country={this.state.country} />
      </div>
    );
  }
}

export default App;
