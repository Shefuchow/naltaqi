import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { HalaqasComponent } from './halaqas/halaqas.component';
import { OrganizerResourcesComponent } from './organizer-resources/organizer-resources.component';
import { SearchComponent } from './search/search.component';
import { VolunteeringComponent } from './volunteering/volunteering.component';
import { YouthProgramsComponent } from './youth-programs/youth-programs.component';


const routes: Routes = [
   { path : '', component: AboutUsComponent },
   { path : 'search', component: SearchComponent },
   { path : 'events', component: EventsComponent },
   { path : 'halaqas', component: HalaqasComponent },
   { path : 'youth-programs', component: YouthProgramsComponent },
   { path : 'volunteering', component: VolunteeringComponent },
   { path : 'organizer-resources', component: OrganizerResourcesComponent },
   { path : 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
