import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  return (
    <div className={"row row-cols-1 row-cols-md-2 g-4"}>
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};

HeroList.propTypes = {
  publisher: PropTypes.oneOf(["Marvel Comics", "DC Comics"]),
};

export default HeroList;
