import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from './housing-location';
import { HousingListComponent } from './housing-list/housing-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HousingListComponent],
  template: `
    <main>
      <header>
        <img src="../assets/logo.svg" alt="Logo" onerror="this.remove()" />
        FairHouse
      </header>
      <section>
        <app-housing-list
          [locationList]="housingLocationList"
          (locationSelectedEvent)="updateSelectedLocation($event)"
        ></app-housing-list>
        <article>
          <ng-container *ngIf="selectedLocation">
            <div class="fixed-container">
              <img
                [src]="selectedLocation?.photo"
                [alt]="selectedLocation?.name"
              />
              <p>{{ selectedLocation?.name }}</p>
              <p>{{ selectedLocation?.city }}, {{ selectedLocation?.state }}</p>
              <p>Available Units: {{ selectedLocation?.availableUnits }}</p>
              <p>
                {{
                  selectedLocation?.laundry
                    ? 'Has laundry.'
                    : "Doesn't have laundry."
                }}
              </p>
              <p>
                {{
                  selectedLocation?.wifi ? 'Has wifi.' : "Doesn't have wifi."
                }}
              </p>
            </div>
          </ng-container>
        </article>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'fairhouse';

  housingLocationList: HousingLocation[] = [
    {
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: '../assets/housing-1.jpg',
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      name: 'A113 Transactional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: '../assets/housing-2.jpg',
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo: '../assets/housing-3.jpg',
      availableUnits: 1,
      wifi: false,
      laundry: false,
    },
  ];

  selectedLocation: HousingLocation | undefined;

  updateSelectedLocation(location: HousingLocation) {
    this.selectedLocation = location;
  }
}
