import { Link } from "react-router-dom";

function Nav({ dogs }) {
  return (
    <nav className="Nav">
      <Link to="/">Home</Link>
      {dogs.map((dog) => {
        return <Link to={`/dogs/${dog}`}> {dog} </Link>;
      })}
    </nav>
  );
}

export default Nav;
