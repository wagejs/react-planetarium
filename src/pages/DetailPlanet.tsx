import PlanetDetail from "../components/PlanetDetail";
import { DETAIL_PLANET } from "../api/query";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { dateFormat } from "../utils/date";
import styled from "styled-components";

const Container = styled.div`
  padding: 24px;
`;

function DetailPlanet() {
  let { id } = useParams();
  const { loading, error, data } = useQuery(DETAIL_PLANET, {
    variables: {
      id: id,
    },
  });
  if (loading)
    return (
      <Container>
        <>Loading...</>
      </Container>
    );
  if (error) return <>Error! {error.message}</>;
  const detail = data.planet;
  return (
    <Container>
      <PlanetDetail
        id={detail.id}
        name={detail.name}
        diameter={detail.diameter}
        gravity={detail.gravity}
        climates={detail.climates}
        population={detail.population}
        rotationPeriod={detail.rotationPeriod}
        orbitalPeriod={detail.orbitalPeriod}
        terrains={detail.terrains}
        surfaceWater={detail.surfaceWater}
        edited={dateFormat(detail.edited)}
      />
    </Container>
  );
}

export default DetailPlanet;
