export type Planet = {
  id: number,
  name: string,
  diameter: number,
  population: number
}

export type DetailPlanet = {
  id: number,
  name: string,
  diameter: number,
  gravity: string,
  climates: Array<String>,
  population: number
  rotationPeriod: number,
  orbitalPeriod: number
  terrains: Array<String>
  surfaceWater: number,
  edited: string
}