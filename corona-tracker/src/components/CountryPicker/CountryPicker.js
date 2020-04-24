import React, { useState, useEffect } from "react";
import styles from "./CountryPicker.module.css";

import axios from "axios";
import { NativeSelect, FormControl } from "@material-ui/core";

const CountryPicker = props => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://covid19.mathdro.id/api/countries")
      .then(res => {
        setCountries(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [setCountries]);

  const handleChanges = e => {
    props.handleCountryChanges(e.target.value);
  };

  return (
    <FormControl>
      <NativeSelect className={styles.formControl} onChange={handleChanges}>
        <option value="global">Global</option>

        {countries.countries
          ? countries.countries.map(country => {
              return (
                <option key={country.name} value={country.name}>
                  {country.name}
                </option>
              );
            })
          : null}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
