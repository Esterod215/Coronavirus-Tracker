import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country = "global") => {
  try {
    if (country != null && country != "global") {
      const { data } = await axios.get(`${url}/countries/${country}`);
      const modifiedData = {
        confirmed: data.confirmed,
        deaths: data.deaths,
        recovered: data.recovered,
        lastUpdate: data.lastUpdate
      };
      return modifiedData;
    } else {
      const { data } = await axios.get(url);
      const modifiedData = {
        confirmed: data.confirmed,
        deaths: data.deaths,
        recovered: data.recovered,
        lastUpdate: data.lastUpdate
      };
      return modifiedData;
    }
  } catch (error) {
    console.log(error);
  }
};
