import React from "react";
import PokemonInfo, { PokemonInfoI } from "Components/PokemonInfo";
import Sticky from "Components/Sticky";
import styles from "./PokemonPage.module.css";

export interface PokemonPageI {
  fetchRandom: ()=>void;
  randomPokemon: PokemonInfoI["info"] | null;
  mainPokemon: Array<PokemonInfoI["info"]>;
}

const PokemonPage: React.FC<PokemonPageI> = ({
  fetchRandom,
  randomPokemon,
  mainPokemon,
}) => {
  return (
    <div>
      <Sticky>
        <button data-testid="random-button" onClick={fetchRandom}>Random Pokemon</button>
      </Sticky>
      <div className={styles.container} >
        {mainPokemon.map(pokemon => {
          return <PokemonInfo key={pokemon.id} info={pokemon} />
        })}
        {randomPokemon && (
          <PokemonInfo info={randomPokemon} />
          )}
      </div>
    </div>
  )
}

export default PokemonPage;
