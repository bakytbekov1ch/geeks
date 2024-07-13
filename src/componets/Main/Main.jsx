import React, { useEffect, useState } from "react";

import "./Main.scss";
import axios from "axios";

const API = "https://pokeapi.co/api/v2/pokemon/";

function Main() {
  const [value, setValue] = useState([]);

  async function handleClick() {
    try {
      const res = await axios.get(API);

      console.log(res);
      setValue(res.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="main">
      <div className="container">
        <div className="main__text">
          <h1>GEEKS</h1>
        </div>
        <div className="main__content">
          {value.map((item, index) => (
            <div key={index} className="main__mocApi">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  index + 1
                }.png`}
                alt={value.name}
              />
              <h2>{item.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
