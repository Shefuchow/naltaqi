import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-halaqas',
  templateUrl: './halaqas.component.html',
  styleUrls: ['./halaqas.component.css']
})

export class HalaqasComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = [];
  cardsForHandset = [
    {
      "title": "Masjid Community Talk",
      "time" : "Thursdays 7pm",
      "description": "Islamic talk with fellow Muslims",
      "imageName": "masjid",
      "location" : "San Fransisco islamic Center",
      "virtual" : "true",
      "where" : "email us for zoom link!",
      "contact" :"sfmasjid@gmail.com",
          "cols": 4,
        "rows": 1
    },

    {
      "title": "Masjid Meetup",
      "time" : " Thursdays 10pm",
      "description": "Talk with fellow members",
      "imageName": "qurantutor",
      "location" : "San Fransisco islamic Center",
      "virtual" : "false",
      "where" : "347 Bayarea st, sf, 11234",
      "contact" : "sfmasjid@gmail.com"   ,
          "cols": 4,
        "rows": 1
    },

    {
      "title": "Masjid Weekly Meeting",
      "time" : " Monday 10pm",
      "description": "Talk with fellow members",
      "imageName": "eid",
      "location" : "Canada islamic Center",
      "virtual" : "true",
      "where" : "email us for zoom link!",
      "contact" : "bestmasjid@gmail.com"   ,
          "cols": 4,
        "rows": 1
    },

    {
      "title": "Commmunity Meeting",
      "time" : " Tuesday 10pm",
      "description": "Friendly talk with new people",
      "imageName": "halaqa",
      "location" : "US islamic Center",
      "virtual" : "true",
      "where" : "email us for zoom link!",
      "contact" : "USAmasjid@gmail.com"   ,
          "cols": 4,
        "rows": 1
    },

    {
      "title": "Community Center Club",
      "time" : " January 10pm",
      "description": "Get to talk with fellow members about updates int he community and things to do in the area",
      "imageName": "masjid",
      "location" : "Group community center",
      "virtual" : "false",
      "where" : "545 Juniper way, California",
      "contact" : "junipterMasjid@gmail.com"   ,
          "cols": 4,
        "rows": 1
    },

    {
      "title": "Community Center 101",
      "time" : " Saturday 5am",
      "description": "Fajr Prayer with fellow Muslims now that covid 19 has a lesser effect on the population",
      "imageName": "studygroup",
      "location" : "Islamic Center Way",
      "virtual" : "true",
      "where" : "email us for zoom link!",
      "contact" : "emailus@yahoo.com"   ,
          "cols": 4,
        "rows": 1
    },

    {
      "title": "Masjid Weekly Meeting",
      "time" : " Monday 10pm",
      "description": "Talk with fellow members",
      "imageName": "team",
      "location" : "Institute for Islam Center",
      "virtual" : "true",
      "where" : "email us for zoom link!",
      "contact" : "InstituteGeneral@gmail.com"   ,
          "cols": 4,
        "rows": 1
    },

    {
      "title": "Center for talking",
      "time" : "Thursday 10pm",
      "description": "Meeeting with fellow comrads",
      "imageName": "tutoring",
      "location" : "Insitute islamic Center",
      "virtual" : "true",
      "where" : "email us for zoom link!",
      "contact" : "InstituteEmail@gmail.com"   ,
          "cols": 4,
        "rows": 1
    },

    {
      "title": "Group session",
      "time" : " Friday 10pm",
      "description": "Have intellectual talks with our team and discuss",
      "imageName": "event",
      "location" : "Group meeting section 104",
      "virtual" : "false",
      "where" : "Section 104. San Jose, California",
      "contact" : "Section104Meeting@gmail.com"   ,
          "cols": 4,
        "rows": 1
    }
  ];




  cardsForWeb = [
{
  "title": "Masjid Community Talk",
  "time" : "Thursdays 7pm",
  "description": "Islamic talk with fellow Muslims",
  "imageName": "masjid",
  "location" : "San Fransisco islamic Center",
  "virtual" : "true",
  "where" : "email us for zoom link!",
  "contact" :"sfmasjid@gmail.com",
      "cols": 1,
    "rows": 1
},

{
  "title": "Masjid Meetup",
  "time" : " Thursdays 10pm",
  "description": "Talk with fellow members",
  "imageName": "qurantutor",
  "location" : "San Fransisco islamic Center",
  "virtual" : "false",
  "where" : "347 Bayarea st, sf, 11234",
  "contact" : "sfmasjid@gmail.com"   ,
      "cols": 1,
    "rows": 1
},

{
  "title": "Masjid Weekly Meeting",
  "time" : " Monday 10pm",
  "description": "Talk with fellow members",
  "imageName": "eid",
  "location" : "Canada islamic Center",
  "virtual" : "true",
  "where" : "email us for zoom link!",
  "contact" : "bestmasjid@gmail.com"   ,
      "cols": 1,
    "rows": 1
},

{
  "title": "Commmunity Meeting",
  "time" : " Tuesday 10pm",
  "description": "Friendly talk with new people",
  "imageName": "halaqa",
  "location" : "US islamic Center",
  "virtual" : "true",
  "where" : "email us for zoom link!",
  "contact" : "USAmasjid@gmail.com"   ,
      "cols": 1,
    "rows": 1
},

{
  "title": "Community Center Club",
  "time" : " January 10pm",
  "description": "Get to talk with fellow members about updates int he community and things to do in the area",
  "imageName": "masjid",
  "location" : "Group community center",
  "virtual" : "false",
  "where" : "545 Juniper way, California",
  "contact" : "junipterMasjid@gmail.com"   ,
      "cols": 1,
    "rows": 1
},

{
  "title": "Community Center 101",
  "time" : " Saturday 5am",
  "description": "Fajr Prayer with fellow Muslims now that covid 19 has a lesser effect on the population",
  "imageName": "studygroup",
  "location" : "Islamic Center Way",
  "virtual" : "true",
  "where" : "email us for zoom link!",
  "contact" : "emailus@yahoo.com"   ,
      "cols": 1,
    "rows": 1
},

{
  "title": "Masjid Weekly Meeting",
  "time" : " Monday 10pm",
  "description": "Talk with fellow members",
  "imageName": "team",
  "location" : "Institute for Islam Center",
  "virtual" : "true",
  "where" : "email us for zoom link!",
  "contact" : "InstituteGeneral@gmail.com"   ,
      "cols": 1,
    "rows": 1
},

{
  "title": "Center for talking",
  "time" : "Thursday 10pm",
  "description": "Meeeting with fellow comrads",
  "imageName": "tutoring",
  "location" : "Insitute islamic Center",
  "virtual" : "true",
  "where" : "email us for zoom link!",
  "contact" : "InstituteEmail@gmail.com"   ,
      "cols": 1,
    "rows": 1
},

{
  "title": "Group session",
  "time" : " Friday 10pm",
  "description": "Have intellectual talks with our team and discuss",
  "imageName": "event",
  "location" : "Group meeting section 104",
  "virtual" : "false",
  "where" : "Section 104. San Jose, California",
  "contact" : "Section104Meeting@gmail.com"   ,
      "cols": 1,
    "rows": 1
},
{
  "title": "Community Center 101",
  "time" : " Saturday 5am",
  "description": "Fajr Prayer with fellow Muslims now that covid 19 has a lesser effect on the population",
  "imageName": "studygroup",
  "location" : "Islamic Center Way",
  "virtual" : "true",
  "where" : "email us for zoom link!",
  "contact" : "emailus@yahoo.com"   ,
      "cols": 4,
    "rows": 1
},

{
  "title": "Masjid Weekly Meeting",
  "time" : " Monday 10pm",
  "description": "Talk with fellow members",
  "imageName": "team",
  "location" : "Institute for Islam Center",
  "virtual" : "true",
  "where" : "email us for zoom link!",
  "contact" : "InstituteGeneral@gmail.com"   ,
      "cols": 4,
    "rows": 1
},
{
  "title": "Community Center of the Bay Area",
  "time" : " Saturday 5am",
  "description": "Fajr Prayer with fellow Muslims now that covid 19 has a lesser effect on the population",
  "imageName": "studygroup",
  "location" : "Islamic Center Way",
  "virtual" : "true",
  "where" : "email us for zoom link!",
  "contact" : "emailus@yahoo.com"   ,
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
