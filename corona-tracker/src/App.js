import React from "react";
import styles from "./App.module.css";

import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";

import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {}
  };
  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data: data });
  }

  render() {
    return (
      <div className={styles.container}>
        <Cards data={this.state.data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
