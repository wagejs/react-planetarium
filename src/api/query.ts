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