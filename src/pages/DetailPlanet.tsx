import PlanetDetail from "../components/PlanetDetail";
import { DETAIL_PLANET } from "../api/query";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

function DetailPlanet() {
  let { id } = useParams();
  const { loading, error, data } = useQuery(DETAIL_PLANET, {
    variables: {
      id: id,
    },
  });
  if (loading) return <>Loading...</>;
  if (error) return <>Error! {error.message}</>;
  const detail = data.planet;
  return (
    <div>
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
        edited={detail.edited}
      />
    </div>
  );
}

export default DetailPlanet;
