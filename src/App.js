import React, { useEffect, useState } from "react";

import { mergeByGender, filterByCats, sortByName } from "./App.utils";

const petsUrl =
  "https://gist.githubusercontent.com/medibank-digital/a1fc81a93200a7b9d5f8b7eae0fac6f8/raw/de10a4fcf717e6c431e88c965072c784808fd6b2/people.json";

const App = () => {
  const [pets, setPets] = useState();

  useEffect(() => {
    const fn = async () => {
      const response = await fetch(petsUrl);
      const json = await response.json();
      const merged = mergeByGender(json);
      const cats = filterByCats(merged);
      const sorted = sortByName(cats);
      setPets(sorted);
    };
    fn();
  }, []);

  if (pets) {
    return (
      <div>
        <div>Male</div>
        <br />
        {pets["Male"].map((pet) => (
          <div key={pet.name}>{pet.name}</div>
        ))}
        <br />
        <div>Female</div>
        <br />
        {pets["Female"].map((pet) => (
          <div key={pet.name}>{pet.name}</div>
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default App;
