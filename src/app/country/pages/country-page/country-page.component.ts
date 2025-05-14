import { Component } from '@angular/core';
import { CountryListComponent } from "../../components/country-list/country-list.component";

@Component({
  selector: 'app-country-page',
  imports: [CountryListComponent],
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent { }
