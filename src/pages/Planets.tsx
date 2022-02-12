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
  padding-inline-start: 0px;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-bottom: 20px;
`;

const CardListItem = styled.li`
  margin: 12px 12px;
`;

const Button = styled.button`
  padding: 12px 24px;
  border-radius: 70px;
  background: transparent;
  color: #000000;
  font-size: 16px;
  font-weight: 700;
  border: 1px solid #333333;
  cursor: pointer;
  width: 100%;
  max-width: 150px;
  margin: 0px auto;
  display: block;
`;

function Planets() {
  const [planetList, setPlanetList] = useState<Planet[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalItem, setTotalItem] = useState(10);
  const [totalPlanetRendered, setTotalPlanetRendered] = useState(0);

  function loadMore() {
    setTotalItem((prevTotal) => {
      return prevTotal + 10;
    });
  }

  const getListPlanet = useCallback(async (total: number) => {
    try {
      setIsLoading(true);
      const { data } = await client.query({
        query: LIST_PLANET,
        variables: { ...DEFAULT_QUERY, last: total },
      });
      setTotalPlanetRendered(data.allPlanets.totalCount);
      setPlanetList(data.allPlanets.planets);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getListPlanet(totalItem);
  }, [getListPlanet, totalItem]);

  if (isLoading && totalItem == 10) {
    return <>Loading . . .</>;
  }

  return (
    <div>
      <h1 style={{ marginLeft: "12px" }}>All the planets in our Universe</h1>
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
      {totalPlanetRendered > totalItem && (
        <Button onClick={loadMore}>
          {isLoading ? "Loading..." : "Load More"}
        </Button>
      )}
      {totalPlanetRendered == totalItem && !isLoading && (
        <div style={{ display: "flex" }}>
          <p style={{ margin: "0px auto" }}>That's all we have</p>
        </div>
      )}
    </div>
  );
}

export default Planets;
