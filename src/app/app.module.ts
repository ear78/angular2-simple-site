import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// COMPONENT IMPORTS ///////////////////
import { NavbarComponent } from './components/navbar/navbar.component'
import { JumbotronComponent } from './components/jumbotron/jumbotron.component'
import { HomeComponent } from './components/pages/home.component'
import { AboutComponent } from './components/pages/about.component'
import { ContactComponent } from './components/pages/contact.component'
import {routing} from './app.routing'

// MAIN MODULE FOR THE INDEX PAGE //////////////
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
