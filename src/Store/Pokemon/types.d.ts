export namespace Pokemon {

  export interface Formatted{
    baseExperience: number;
    height: number;
    weight: number;
    id: number;
    mainSprite: string | null;
    name: string;
    abilities: any;
    types: any;
    stats: any;
  }
  
  export interface Reducer {
    main: {
      [key: string]: FormattedPokemon;
    },
    random: FormattedPokemon | null;
    errors: any[];
  }
  
}