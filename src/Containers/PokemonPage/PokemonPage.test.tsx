import React from "react";
import { render } from '@testing-library/react'
import { fireEvent } from '@testing-library/dom';
import PokemonPage, {PokemonPageI} from "./PokemonPage";

const renderPage = (props: PokemonPageI) => {
  return render(<PokemonPage {...props} />);
}

const mainPokemon = [
  {
    height: 3,
    weight: 22,
    id: 4,
    name: "Tester 3",
    baseExperience: 7,
    sprite: null
  },
  {
    height: 3,
    weight: 23,
    id: 42,
    name: "No. 0",
    baseExperience: 7,
    sprite: null
  },
  {
    height: 3,
    weight: 20,
    id: 289,
    name: "Pikachu",
    baseExperience: 7,
    sprite: null
  }
]

test('Renders main pokemon', () => {
  const fetchRandom = jest.fn();
  const { queryAllByTestId, queryByText} = renderPage({ fetchRandom, mainPokemon, randomPokemon: null });

  const pokemon = queryAllByTestId("info-div");
  expect(pokemon.length).toEqual(mainPokemon.length);
 
  mainPokemon.forEach(async (pokemon) => {
    expect(queryByText(pokemon.name)).not.toEqual(null);
  })
})

test('Random Pokemon renders, calls fetchRandom', async () => {
  const fetchRandom = jest.fn();
  const randomPokemon = {
    id: 24,
    height: 11,
    weight: 100,
    sprite: null,
    name: "random pokemon",
    baseExperience: 4
  }
  const {
    queryAllByTestId,
    queryByText,
    getByTestId
  } = renderPage({ fetchRandom, mainPokemon, randomPokemon });

  const pokemon = queryAllByTestId("info-div");
  expect(pokemon.length).toEqual(mainPokemon.length + 1);
  expect(queryByText(randomPokemon.name)).not.toEqual(null);
  
  const button = getByTestId("random-button")
  fireEvent.click(button);
  expect(fetchRandom).toHaveBeenCalled();


})