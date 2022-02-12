import { DetailPlanet } from "../interfaces/planet";
import Planet1 from "../assets/images/planet-1.jpg";
import Planet2 from "../assets/images/planet-2.jpg";
import Planet3 from "../assets/images/planet-3.jpg";
import Planet4 from "../assets/images/planet-4.jpg";
import Planet5 from "../assets/images/planet-5.jpg";
import styled from "styled-components";
import { delimeterThousand } from "../utils/delimeter";
import { useNavigate } from "react-router-dom";

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

const Flex = styled.div`
  display: flex;
`;
const FlexWrapper = styled.div`
  max-width: 500px;
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 0px;
`;

const LabelTerrain = styled.label`
  margin-right: 5px;
  font-size: 14px;
  color: #606060;
`;

const Paragraph = styled.p`
  margin-right: 12px;
  line-height: 24px;
`;

const Button = styled.button`
  padding: 12px 24px;
  border-radius: 70px;
  background: #333333;
  color: #e7e7e7;
  font-size: 16px;
  font-weight: 700;
  border: 1px solid transparent;
  cursor: pointer;
  width: 100%;
  max-width: 150px;
  &:first-child {
    margin-right: 8px;
  }
`;

function PlanetDetail(props: DetailPlanet) {
  const navigate = useNavigate();

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
    <Flex>
      <FlexWrapper>
        <Button
          onClick={() => navigate("/")}
          style={{
            maxWidth: "max-content",
          }}>
          Back
        </Button>
        <Title>{props.name}</Title>
        <Flex>
          {props.terrains.map((terrain, i) => (
            <LabelTerrain key={i}>
              {terrain}
              {i == props.terrains.length - 1 ? "" : ","}
            </LabelTerrain>
          ))}
        </Flex>
        <Paragraph>
          There're {delimeterThousand(props.population, "No Civilization", "")}{" "}
          people live in this planet with {props.gravity} g gravity within{" "}
          {delimeterThousand(props.diameter, "Unmeasurable", "km")} kilometers
          across the planet. {props.name} need {props.rotationPeriod} hours to
          spend a single day and need {props.orbitalPeriod} days to rotate
          around the sun. People living in {props.name} facing {props.climates}{" "}
          climates and changing around their daily life
        </Paragraph>
        <LabelTerrain>
          <em>Data Updated: {props.edited}</em>
        </LabelTerrain>
      </FlexWrapper>
      <ImageWrapper>
        <Image src={selectedPict} alt={"planet-" + randomNumber} />
      </ImageWrapper>
    </Flex>
  );
}

export default PlanetDetail;
