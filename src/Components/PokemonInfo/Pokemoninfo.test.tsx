import React from "react";
import { render } from "@testing-library/react";
import PokeInfo, { PokemonInfoI } from "./PokemonInfo";

const renderInfoComponent = (props: PokemonInfoI) => {
  return render(<PokeInfo {...props} />)
}

test('Renders correct info', () => {
  const info = {
      height: 3,
      weight: 20,
      id: 4,
      name: "No. 0",
      baseExperience: 7,
      sprite: "null"
  };

  const { queryByTestId } = renderInfoComponent({info});

  expect(queryByTestId("info-name").textContent).toContain(info.name);
  expect(queryByTestId("info-height").textContent).toContain(info.height);
  expect(queryByTestId("info-weight").textContent).toContain(info.weight);
  expect(queryByTestId("info-exp").textContent).toContain(info.baseExperience);

})