import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function DogDetails() {
  const { name } = useParams();

  const [dog, setDog] = useState(null);

  async function getDog() {
    const resp = await axios.get("http://localhost:5001/dogs/");
    // find instead of filter will return only the one thing instead of an array
    const dog = resp.data.find((dog) => dog.src === name.toLowerCase());
    setDog({ ...dog });
  }

  if (!dog || dog.name !== name) getDog();

  return (
    <div>
      {!dog ? (
        <div>Loading...</div>
      ) : (
        <div>
          <img src={`/${dog.name}.jpg`} alt={name} />
          <h2>{dog.name}</h2>
          <p>Age: {dog.age}</p>
          <ul>
            {dog.facts.map((fact, i) => {
              return <li key={i}>{fact}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DogDetails;
