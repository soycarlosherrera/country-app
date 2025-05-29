import type { RESTCountry } from "../interfaces/rest-countries.interface";
import type { Country } from '../interfaces/country.interface';

export class CountryMapper {

  static mapRestCountryToCountry(restCountry: RESTCountry) : Country{

    return {

      cca2 : restCountry.cca2,
      flag: restCountry.flag,
      flagSvg: restCountry.flags.svg,
      name: restCountry.translations['spa'].common ?? 'No spanish name',
      capital: restCountry.capital.join(','),
      //capital: restCountry.capital[0],
      population: restCountry.population

    }

  }

  static restCountryArrayToCountryArray(restCountrys: RESTCountry[]) : Country[]{

    return restCountrys.map(this.mapRestCountryToCountry);

  }

}
