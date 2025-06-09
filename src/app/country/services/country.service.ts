import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { catchError, delay, map, Observable, throwError } from 'rxjs';
import type { Country } from '../interfaces/country.interface';
import { CountryMapper } from '../mappers/country.mapper';

const API_URL = 'https://restcountries.com/v3.1'

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private http = inject(HttpClient);

  searchByCapital(query:string):Observable<Country[]>{
    query = query.toLowerCase();
    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`)
      .pipe(
        map(restCountries =>
          CountryMapper.restCountryArrayToCountryArray(restCountries)
        ),
        catchError((error) => {
          console.log('Error fetching ',error);
          return throwError(
            ()=> new Error(`No se encontraron coincidencias con: ${query}`)
          );
        })
      );
  }

  searchByCountry(query:string):Observable<Country[]>{
    query = query.toLowerCase();
    return this.http.get<RESTCountry[]>(`${API_URL}/name/${query}`)
      .pipe(
        map(restCountries =>
          CountryMapper.restCountryArrayToCountryArray(restCountries)
        ),
        //delay(3000),
        catchError((error) => {
          console.log('Error fetching ',error);
          return throwError(
            ()=> new Error(`No se encontraron coincidencias con: ${query}`)
          );
        })
      );
  }

}
