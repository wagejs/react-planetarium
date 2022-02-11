import { DetailPlanet } from "../interfaces/planet";
import Planet1 from "../assets/images/planet-1.jpg";
import Planet2 from "../assets/images/planet-2.jpg";
import Planet3 from "../assets/images/planet-3.jpg";
import Planet4 from "../assets/images/planet-4.jpg";
import Planet5 from "../assets/images/planet-5.jpg";
import styled from "styled-components";
import { delimeterThousand } from "../utils/delimeter";

const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 500px;
`;

const ImageWrapper = styled.div`
  width: max-content;
  overflow: hidden;
  border-radius: 12px;
  border: 1px solid #ebebeb;
`;

function PlanetDetail(props: DetailPlanet) {
  let selectedPict;

  const randomNumber = Math.floor(Math.random() * 6);
  if (randomNumber === 0 || randomNumber === 1) {
    selectedPict = Planet1;
  } else if (randomNumber === 2) {
    selectedPict = Planet2;
  } else if (randomNumber === 3) {
    selectedPict = Planet3;
  } else if (randomNumber === 4) {
    selectedPict = Planet4;
  } else if (randomNumber === 5) {
    selectedPict = Planet5;
  }

  return (
    <div>
      <div>
        <p>{props.name}</p>
        <p>{props.terrains}</p>
        <p>
          There're {delimeterThousand(props.population, "No Civilization", "")}{" "}
          people live in this planet with {props.gravity} g gravity within{" "}
          {delimeterThousand(props.diameter, "Unmeasurable", "km")} kilometers
          across the planet. {props.name} need {props.rotationPeriod} hours to
          spend a single day and need {props.orbitalPeriod} days to rotate
          around the sun. People living in {props.name} facing {props.climates}{" "}
          climates and changing around their daily life
        </p>
        <p>Updated: {props.edited}</p>
      </div>
      <ImageWrapper>
        <Image src={selectedPict} alt={"planet-" + randomNumber} />
      </ImageWrapper>
    </div>
  );
}

export default PlanetDetail;
