import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-quran-studies',
  templateUrl: './quran-studies.component.html',
  styleUrls: ['./quran-studies.component.css']
})

export class QuranStudiesComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = [];
  cardsForHandset = [
    {
      "title": "Basketball game",
      "time" : "June 21st, 7:00pm",
      "description" : "6vs6 basketball game",
      "imageName" : "basketball",
      "location" : "YMCA",
            "cols": 4,
        "rows": 1
  }
  ];




  cardsForWeb = [
    {
      "title": "Mohammed Osman",
      "time" : "November 12th, 6:00am",
        "description" : "Do not bring any rowdy kids! We want to keep things civil amongst the kids!",
        "imageName" : "qurantutors",
        "location" : "Lake Merritt Park, Oakland, California",
        "contact" : "lakeYouthGroup@gmail.com"  ,
              "cols": 1,
        "rows": 1
    },

    {
      "title": "Abdurrahman Musa",
      "time" : "February 10th, 9:00am",
        "description" : "Local meetup, please email for more information",
        "imageName" : "studygroup",
        "location" : "Will be held online via zoom",
        "contact" : "youthEmailSetting@gmail.com"  ,
              "cols": 1,
        "rows": 1
    },

    {
      "title": "Lena Fuhar",
      "time" : "December 10th, 9:00am",
        "description" : "Email for more information",
        "imageName" : "halaqa",
        "location" : "Will be held online via zoom",
        "contact" : "EmailInformationGroup@gmail.com" ,
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
