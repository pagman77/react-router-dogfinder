import react, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


function DogList() {

  const [ dogs, setDogs ] = useState(null);

  async function getDogs() {
    const resp = await axios.get("http://localhost:5001/dogs");
    setDogs([...resp.data]);
  };

  if (!dogs) getDogs();

  return (
    <div>
      {!dogs ?
      <div>Loading...</div>
      :
      dogs.map((dog, i) => {
        return (
          <div>
            <h2>{dog.name}</h2>
            <Link to={`/dogs/${dog.src}`}>
            <img src={`/${dog.name}.jpg`} alt={dog.name} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default DogList;