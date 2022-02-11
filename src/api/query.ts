import { gql } from "@apollo/client";

export const LIST_PLANET = gql`
  query listAllPlanets($after: String,$first: Int, $before: String, $last: Int){
    allPlanets(after: $after, first: $first, before: $before, last: $last){
      totalCount
      planets{
        id
        name
        diameter
        gravity
        climates
        population
      }
    }
  }
`

export const DETAIL_PLANET = gql`
  query getDetailPlanet($id: ID){
    planet(id: $id){
      name
      id
      gravity
      rotationPeriod
      orbitalPeriod
      population
      climates
      terrains
      surfaceWater
      edited
    }
  }
`;