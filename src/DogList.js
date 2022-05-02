import react, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import perry from "./perry.jpg";
import whiskey from "./whiskey.jpg";
import duke from "./duke.jpg";

const dogImages = [whiskey, duke, perry];

function DogList() {

  const [ dogs, setDogs ] = useState(null);

  async function getDogs() {
    const resp = await axios.get("http://localhost:5001/dogs");
    setDogs(resp.data);
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
            <Link to={`/dogs/${dog.name}`}>
            <img src={(dogImages)[i]} alt={dog.name} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default DogList;