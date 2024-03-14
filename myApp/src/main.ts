import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';


bootstrapApplication(AppComponent, {
  providers: [
    HttpClientModule,
    provideRouter(routes)
  ] 
})
.catch((err) => console.error(err));