import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './app/counter/state/counter.reducer';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({ counter: counterReducer }) // Store setup
  ]
}).catch(err => console.error(err));
