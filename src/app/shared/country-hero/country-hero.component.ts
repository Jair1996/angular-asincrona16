import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-country-hero',
  templateUrl: './country-hero.component.html',
  styles: [],
})
export class CountryHeroComponent {
  @Input() name!: string;
  @Input() img!: string;
}
