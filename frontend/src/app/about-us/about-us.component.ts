import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = [];
  cardsForHandset = [
    {
      "imageName": "logo",
      "title": "We developed a platform for Muslim youth to connect to their community!",
      "cols": 4,
      "rows": 1
    },
    {
      "imageName": "event",
      "title": "Search events to go to and have fun",
      "cols": 4,
      "rows": 1
  },
  {
      "imageName": "halaqa",
      "title": "Meet for the sake of Allah to become 1% better muslims",
      "cols": 4,
      "rows": 1
  },
  {
      "imageName": "youth",
      "title": "Learn and socialize in Youth Programs at the masjid",
      "cols": 4,
      "rows": 1
  },
  {
      "imageName": "volunteering",
      "title": "Volunteer for the sake of Allah",
      "cols": 4,
      "rows": 1
  }
  ,
  {
      "imageName": "qurantutors",
      "title": "Learn our holy quran from local quran teachers",
      "cols": 4,
      "rows": 1
  },
  {
      "imageName": "muslimbusiness",
      "title": "Shop at local muslim business to support the community!",
      "cols": 4,
      "rows": 1
  }
  ];
  cardsForWeb = [
    {
      "imageName": "team",
      "title": "Our team at Halal Hacks developed a platform for Muslim youth to connect to their community!",

      "cols": 2,
      "rows": 1
  },
  {
      "imageName": "event",
      "title": "Search events to go to and have fun",
      "cols": 1,
      "rows": 1
  },
  {
      "imageName": "halaqa",
      "title": "Meet for the sake of Allah to become 1% better muslims",
      "cols": 1,
      "rows": 1
  },
  {
      "imageName": "youth",
      "title": "Learn and socialize in Youth Programs at the masjid",
      "cols": 1,
      "rows": 1
  },
  {
      "imageName": "volunteering",
      "title": "Volunteer for the sake of Allah",
      "cols": 1,
      "rows": 1
  }
  ,
  {
      "imageName": "qurantutors",
      "title": "Learn our holy quran from local quran teachers",
      "cols": 1,
      "rows": 1
  },
  {
      "imageName": "muslimbusiness",
      "title": "Shop at local muslim business to support the community!",
      "cols": 1,
      "rows": 1
  }
  ];

  /*      E X A M P L E  C A R D  A R R A Y
      [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
  */

  isHandset: boolean = false;
  isHandsetObserver: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return true;
      }
      return false;
    })
  );


  constructor(private breakpointObserver: BreakpointObserver) {
    this.isHandsetObserver.subscribe(currentObserverValue => {
      console.log(currentObserverValue);
    });
  }

  ngOnInit() {
    this.isHandsetObserver.subscribe(currentObserverValue => {
      this.isHandset = currentObserverValue;
      this.loadCards();
    });
    console.log(this.isHandsetObserver);
  }


  loadCards() {
    this.cards = this.isHandset ? this.cardsForHandset : this.cardsForWeb;
  }

  getImage(imageName: string): string {
    //for DEV
    return 'url(' + 'https://github.com/Shefuchow/naltaqi/blob/main/img/' + imageName + '.png?raw=true' + ')';
    //For PROD
    //Make sure to move copy of img folder into /Docs !!!!
  }
}
