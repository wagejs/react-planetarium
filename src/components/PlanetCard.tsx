import styled from "styled-components";
import { Planet } from "../interfaces/planet";
import DefaultImagePlanet from "../assets/images/planet-earth.png";

const PlanetCard = styled.div`
  border-radius: 8px;
  padding: 12px;
  border: 1px solid #ebebeb;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in;
  &:hover {
    box-shadow: -2px 11px 43px 0px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: -2px 11px 43px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: -2px 11px 43px 0px rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const WrapperFlex = styled.div`
  align-self: center;
  margin-right: 16px;
`;

const Flex = styled.div`
  display: flex;
`;

const TextBold = styled.p`
  font-weight: 700;
`;

function PlanteCard(props: Planet) {
  function numberWithCommas(x: number) {
    if (!x) {
      return "No Civilization";
    }
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  return (
    <PlanetCard>
      <WrapperFlex>
        <img src={DefaultImagePlanet} alt="default-planet" width="100" />
      </WrapperFlex>
      <WrapperFlex>
        <Title>{props.name}</Title>
        <Flex>
          <WrapperFlex>
            <p>Diameter</p>
            <TextBold>
              {props.diameter ? props.diameter : "Unmeasurable"}
            </TextBold>
          </WrapperFlex>
          <div>
            <p>Population</p>
            <TextBold>{numberWithCommas(props.population)}</TextBold>
          </div>
        </Flex>
        <Flex>
          <WrapperFlex>
            <p>Gravity</p>
            <TextBold>{props.gravity}</TextBold>
          </WrapperFlex>
          <div className="flex">
            <p>Climates</p>
            <TextBold>{props.climates}</TextBold>
          </div>
        </Flex>
      </WrapperFlex>
    </PlanetCard>
  );
}

export default PlanteCard;
