import { RouterModule, Routes } from '@angular/router';
import { DisplayDataComponent } from './display-data/display-data.component';
import { HomeComponent } from './home/home.component';
import { FeedbackComponent } from './feedback/feedback.component'; 
import { NavigationComponent } from './navigation/navigation.component';

export const routes: Routes = [
  { path: '', redirectTo: '/nav', pathMatch: 'full' }, // Default route
  { path: 'nav', component: NavigationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'display-data', component: DisplayDataComponent },
  { path: 'feedback', component: FeedbackComponent }
];

export class AppModule { }