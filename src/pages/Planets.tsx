import React, { useCallback, useEffect, useState } from "react";
import { LIST_PLANET } from "../api/query";
import { Planet } from "../interfaces/planet";
import { client } from "../api/apollo-client";
import { DEFAULT_QUERY } from "../constant/planet";
import PlanteCard from "../components/PlanetCard";
import styled from "styled-components";

const CardList = styled.ul`
  list-style-type: none;
  margin-left: 0px;
  display: flex;
  flex-flow: row wrap;
`;

const CardListItem = styled.li`
  margin: 12px 12px;
`;

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
      <CardList>
        {planetList.map((planet) => (
          <CardListItem key={planet.id}>
            <PlanteCard
              id={planet.id}
              name={planet.name}
              diameter={planet.diameter}
              population={planet.population}
            />
          </CardListItem>
        ))}
      </CardList>
    </div>
  );
}

export default Planets;
