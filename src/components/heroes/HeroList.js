import React from "react";
import PropTypes from "prop-types";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";

const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);
  return (
    <ul>
      {heroes.map((hero) => (
        <li key={hero.id}>{hero.superhero}</li>
      ))}
    </ul>
  );
};

HeroList.propTypes = {
  publisher: PropTypes.oneOf(["Marvel Comics", "DC Comics"]),
};

export default HeroList;
