import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  /** Based on the screen size, switch from standard to one column per row */
  public search:boolean = false;
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
  },
  {
    "title": "Video gaming session",
    "time" : "December 21st, 3:00pm",
    "description" : "Online games with friends, could be a range of titles",
    "imageName" : "videogame",
    "location" : "We will be on discord to talk with each other and play" ,
          "cols": 4,
      "rows": 1
},
{
  "title": "Learn about Eid!",
  "time" : "December 21st, 3:00pm",
  "description" : "Online games with friends, could be a range of titles",
  "imageName" : "eid",
  "location" : "We will be on discord to talk with each other and play" ,
        "cols": 4,
    "rows": 1
},

  {
      "title": "Coding Hackathon",
      "time" : "September 21st, 10:00am",
      "description" : "Coding hackathon that will be started on the 21st and end on the 25th",
      "imageName" : "coding",
      "location" : "Will be held online via zoom",
            "cols": 4,
        "rows": 1
  },

  {
      "title": "Soccer game",
      "time" : "September 10st, 10:00am",
      "description" : "Will be a 10vs10 game, we will keep it civil and have a good time",
      "imageName" : "soccer",
      "location" : "The soccer field in the back of the masjid at Fair Oaks Drive" ,
            "cols": 4,
        "rows": 1
  },

  {
      "title": "July 4th get together",
      "time" : "July 4th, 10:00am",
      "description" : "Will be having a halal get together for July 4th, we will have hotdogs and fireworks for the friends and family",
      "imageName" : "event",
      "location" : "In the back of Ahmad's house" ,
            "cols": 4,
        "rows": 1
  },

  {
    "title": "Girls night as the masjid",
    "time" : "July 4th, 10:00am",
    "description" : "Will be having a halal get together for July 4th, we will have hotdogs and fireworks for the friends and family",
    "imageName" : "event",
    "location" : "In the back of Ahmad's house" ,
          "cols": 4,
      "rows": 1
},

{
  "title": "Painting Class",
  "time" : "July 4th, 10:00am",
  "description" : "Will be having a halal get together for July 4th, we will have hotdogs and fireworks for the friends and family",
  "imageName" : "musicfestival",
  "location" : "In the back of Ahmad's house" ,
        "cols": 4,
    "rows": 1
},
  {
      "title": "Movie Watching",
      "time" : "October 21st, 9:00pm",
      "description" : "We will host a movie watching online via zoom, we can have a vote for the movie in the comments",
      "imageName" : "movie",
      "location" : "Will be held online via zoom" ,
            "cols": 4,
        "rows": 1
  },

  {
      "title": "Halal Music Festival",
      "time" : "February 7th, 5:00pm",
      "description" : "We can have a fun time hanging out with each other!",
      "imageName" : "event",
      "location" : "Fake Coachella Valley" ,
            "cols": 4,
        "rows": 1
  },

  {
      "title": "National Park Hike",
      "time" : "October 9th, 8:00pm",
      "description" : "An hour long hike with friends",
      "imageName" : "hiking",
      "location" : "Yosemite National Park barracks 4" ,
            "cols": 4,
        "rows": 1
  },

  {
      "title": "Study group",
      "time" : "June 25th, 7:00pm",
      "description" : "Computer programming group to talk amongst other people",
      "imageName" : "coding",
      "location" : "Will be held online via zoom" ,
            "cols": 4,
        "rows": 1
  },

  {
      "title": "Video gaming session",
      "time" : "December 21st, 3:00pm",
      "description" : "Online games with friends, could be a range of titles",
      "imageName" : "videogame",
      "location" : "We will be on discord to talk with each other and play" ,
            "cols": 4,
        "rows": 1
  }
  ];




  cardsForWeb = [
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
    "title": "Video gaming session",
    "time" : "December 21st, 3:00pm",
    "description" : "Online games with friends, could be a range of titles",
    "imageName" : "videogame",
    "location" : "We will be on discord to talk with each other and play" ,
          "cols": 1,
      "rows": 1
},
{
  "title": "Learn about Eid!",
  "time" : "December 21st, 3:00pm",
  "description" : "Online games with friends, could be a range of titles",
  "imageName" : "eid",
  "location" : "We will be on discord to talk with each other and play" ,
        "cols": 1,
    "rows": 1
},

  {
      "title": "Coding Hackathon",
      "time" : "September 21st, 10:00am",
      "description" : "Coding hackathon that will be started on the 21st and end on the 25th",
      "imageName" : "coding",
      "location" : "Will be held online via zoom",
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
  "title": "Painting Class",
  "time" : "July 4th, 10:00am",
  "description" : "Will be having a halal get together for July 4th, we will have hotdogs and fireworks for the friends and family",
  "imageName" : "musicfestival",
  "location" : "In the back of Ahmad's house" ,
        "cols": 1,
    "rows": 1
},
  {
      "title": "Movie Watching",
      "time" : "October 21st, 9:00pm",
      "description" : "We will host a movie watching online via zoom, we can have a vote for the movie in the comments",
      "imageName" : "movie",
      "location" : "Will be held online via zoom" ,
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

  {
      "title": "Study group",
      "time" : "June 25th, 7:00pm",
      "description" : "Computer programming group to talk amongst other people",
      "imageName" : "coding",
      "location" : "Will be held online via zoom" ,
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
    });
    console.log(this.isHandsetObserver);
  }

  submitSearch(){
    this.loadCards();
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
