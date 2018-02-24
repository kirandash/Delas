import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule, MatToolbarModule, MatCardModule, MatSlideToggleModule } from '@angular/material'; // Note that this is just TS imports - remember to import the modules in angular point of view
import 'hammerjs'; // Gesture Support

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule, MatToolbarModule, MatCardModule, MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
