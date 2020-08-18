import { createClient } from "./sdkCreator";
import { AxiosInstance, AxiosRequestConfig } from "axios";

export class PokemonSdkClient {
  protected _requester: AxiosInstance;

  constructor(baseUrl: string, config?: AxiosRequestConfig) {
    this._requester = createClient(baseUrl, config);
  }

  public pokemon = {
    getById: (id: string) => {
      return this._requester.get(`/pokemon/${id}`).then(res=>res.data);
    }
  }
}

const PokemonSdk = new PokemonSdkClient("https://pokeapi.co/api/v2");
(window as any).pokemon = PokemonSdk;

export default PokemonSdk;
