import React, { useCallback, useEffect, useState } from "react";
import { LIST_PLANET } from "../api/query";
import { Planet } from "../interfaces/planet";
import { client } from "../api/apollo-client";
import { DEFAULT_QUERY } from "../constant/planet";

function Planets() {
  const [planetList, setPlanetList] = useState<Planet[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getListPlanet = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await client.query({
        query: LIST_PLANET,
        variables: DEFAULT_QUERY,
      });
      setPlanetList(data.allPlanets.planets);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getListPlanet();
  }, [getListPlanet]);

  if (isLoading) {
    return <>Loading . . .</>;
  }

  return (
    <div>
      <ul>
        {planetList.map((planet) => (
          <li key={planet.id}>{planet.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Planets;
