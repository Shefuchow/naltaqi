import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  cardsForWebSearch = [
    {
      "title": "Basketball game",
      "time" : "June 21st, 7:00pm",
      "description" : "6vs6 basketball game",
      "imageName" : "basketball",
      "location" : "YMCA",
      "cols": 1,
      "rows": 1
    },

    {
      "title": "Soccer game",
      "time" : "September 10st, 10:00am",
      "description" : "Will be a 10vs10 game, we will keep it civil and have a good time",
      "imageName" : "soccer",
      "location" : "The soccer field in the back of the masjid at Fair Oaks Drive" ,
      "cols": 1,
      "rows": 1
    },
    {
      "title": "National Park Hike",
      "time" : "October 9th, 8:00pm",
      "description" : "An hour long hike with friends",
      "imageName" : "hiking",
      "location" : "Yosemite National Park barracks 4" ,
      "cols": 1,
      "rows": 1
    },
  ];

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

  // search() {
  //   const clickInput = document.getElementById('search-click') as HTMLButtonElement;
  //   const searchInput = document.getElementById('search-input') as HTMLButtonElement;
  //
  //   const inputValue = searchInput.value;
  //
  //   clickInput.addEventListener('click', () => {
  //     this.mockSearch = !this.mockSearch;
  //     if (this.mockSearch === true) {
  //       this.cards = this.cardsForWeb;
  //     } else {
  //       this.cards = this.cardsForWebSearch;
  //     }
  //   });
    // alert(inputValue);
  }
    // alert(inputValue);
  }
}
