import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <label for="location-search">Search for a new place</label>
    <input
      id="location-search"
      #search
      placeholder="Ex: Chicago"
      (keyup.enter)="searchHousingLocations(search.value)"
    />
    <button (click)="searchHousingLocations(search.value)">Search</button>
    <article *ngFor="let location of results">
      <img
        [src]="location.photo"
        [alt]="location.name"
        (click)="selectHousingLocation(location)"
      />
      <p>{{ location.name }}</p>
      <p>{{ location.city }}, {{ location.state }}</p>
      <button (click)="selectHousingLocation(location)">View</button>
    </article>
  `,
  styleUrls: ['./housing-list.component.css'],
})
export class HousingListComponent implements OnInit {
  @Input() locationList: HousingLocation[] = [];
  results: HousingLocation[] = [];

  @Output() locationSelectedEvent = new EventEmitter<HousingLocation>();

  constructor() {}

  ngOnInit(): void {}

  searchHousingLocations(searchText: string) {
    if (!searchText) return;

    console.log(searchText);

    this.results = this.locationList.filter((location: HousingLocation) =>
      location.city.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  selectHousingLocation(location: HousingLocation) {
    this.locationSelectedEvent.emit(location);
  }
}
