import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ParametersComponent } from './parameters/parameters.component'; 
import { FeedbackComponent } from './feedback/feedback.component'; 

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: 'home', component: HomeComponent },
  { path: 'parameters', component: ParametersComponent },
  { path: 'feedback', component: FeedbackComponent }
];

export class AppModule { }