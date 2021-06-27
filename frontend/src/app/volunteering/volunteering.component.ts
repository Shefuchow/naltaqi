import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-volunteering',
  templateUrl: './volunteering.component.html',
  styleUrls: ['./volunteering.component.css']
})

export class VolunteeringComponent {
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
      "title": "Volunteer Committee",
      "time" : "Thursday 7:00pm",
      "description" : "We will be holding sessions for the youth in order to help them during the summer",
      "imageName" : "youth",
      "location" : "347 Bayarea st, San Francisco, 11234",
      "contact" : "sfmasjid@gmail.com",
            "cols": 1,
      "rows": 1
  },

  {
    "title": "Committee for Volunteering",
    "time" : "September 21st, 10:00am",
      "description" : "Will be teaching Arabic to the youth",
      "imageName" : "masjid",
      "location" : "Will be held online via zoom",
      "contact" : "contactusonlinecenter@gmail.com",
            "cols": 1,
      "rows": 1
  },

  {
    "title": "Group Center for Volunteers",
    "time" : "October 19, 8:00am",
      "description" : "We will hold a youth community at the center for our fellow kids to be together in tough times",
      "imageName" : "studygroup",
      "location" : "125 Oakland California",
      "contact" : "oaklandyouthcenter@gmail.com" ,
            "cols": 1,
      "rows": 1
  },

  {
    "title": "Puppy and kitten rescue",
    "time" : "November 19, 9:00am",
      "description" : "Group of children to be around and play, will be supervisors as well",
      "imageName" : "hiking",
      "location" : "2021 Boulevard, Cleveland, Ohio",
      "contact" : "ClevelandMasjid@gmail.com" ,
            "cols": 1,
      "rows": 1
  },

  {
    "title": "Soup kitchen",
    "time" : "June 29, 6:00am",
      "description" : "Kid meeting to learn about Islam and being Muslims",
      "imageName" : "groupteam",
      "location" : "Will be held online via zoom",
      "contact" : "onlineZoomLinks@gmail.com"  ,
            "cols": 1,
      "rows": 1
  },

  {
    "title": "Help Wanted!",
    "time" : "January 6th, 7:00pm",
      "description" : "Kids meetup",
      "imageName" : "tutoring",
      "location" : "Parkway, San Jose",
      "contact" : "parkwayGroup@yahoo.com"  ,
            "cols": 1,
      "rows": 1
  },

  {
    "title": "Community Giveback",
    "time" : "November 12th, 6:00am",
      "description" : "Do not bring any rowdy kids! We want to keep things civil amongst the kids!",
      "imageName" : "soccer",
      "location" : "Lake Merritt Park, Oakland, California",
      "contact" : "lakeYouthGroup@gmail.com"  ,
            "cols": 1,
      "rows": 1
  },

  {
      "title": "Masjid cleanup!",
      "time" : "February 10th, 9:00am",
      "description" : "Local meetup, please email for more information",
      "imageName" : "masjid",
      "location" : "Will be held online via zoom",
      "contact" : "youthEmailSetting@gmail.com"  ,
            "cols": 1,
      "rows": 1
  },

  {
      "title": "Community Center Drive",
      "time" : "December 10th, 9:00am",
      "description" : "Email for more information",
      "imageName" : "biking",
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
