import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-country-information',
  templateUrl: './country-information.component.html',
  styles: [
  ]
})
export class CountryInformationComponent {
  @Input() information!: string;
}
