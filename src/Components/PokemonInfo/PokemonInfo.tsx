import React from "react";
//should import default image; 
export interface PokemonInfoI {
  info: {
    baseExperience: number;
    weight: number;
    height: number;
    id: number;
    name: string;
    sprite: string | null;
  }
}

const PokemonInfo: React.FC<PokemonInfoI> = ({
  info,
}) => {
  return (
    <div data-testid="info-div">
      <h1 data-testid="info-name">{info.name}</h1>
      <img alt={info.name} src={info.sprite ? info.sprite: ""} />
      <p data-testid="info-height" >Height: {info.height}</p>
      <p data-testid="info-weight">Weight: {info.weight}</p>
      <p data-testid="info-exp">Exp: {info.baseExperience}</p>
    </div>
  )
}

export default PokemonInfo;
