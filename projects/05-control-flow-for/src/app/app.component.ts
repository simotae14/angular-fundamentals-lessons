import { Component } from '@angular/core';

export interface Car {
  make: string;
  model: string;
  miles: number;
  price: number;
  year: number;
  transmission: string;
  image: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <section class="container">
      <!-- This article element represents and entire listing -->
      @for(car of carList; track car) {
        <article class="listing">
          <div class="image-parent">
            <img class="product-image" src="{{ car.image }}" />
          </div>
          <section class="details">
            <p class="title">{{ car.make }} {{ car.model }}</p>
            <hr />
            <p class="detail">
              <span>Year</span>
              <span>{{ car.year }}</span>
            </p>
            <div class="detail">
              <span>Transmission</span>
              <span>{{ car.transmission }}</span>
            </div>
            <p class="detail">
              <span>Mileage</span>
              <span>{{ car.miles }}</span>
            </p>
            <p class="detail">
              <span>Price</span>
              <span>&dollar;{{ car.price }}</span>
            </p>
          </section>
        </article>
      } @empty {
        <p>No listings available</p>
      }
    </section>
  `,
  styleUrl: 'app.component.css',
})
export class AppComponent {
  carList: Car[] = []; // Set carList to an empty array for testing the empty case
}
