import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LivesComponent } from './components/lives/lives.component';
import { TopMedalsComponent } from './components/top-medals/top-medals.component';
import { HttpClientModule } from '@angular/common/http';
import { AthleteDetailsComponent } from './components/athlete-details/athlete-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AthletesService } from './services/athletes.service';
import { AthleteFormComponent } from './components/athlete-form/athlete-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LivesComponent,
    ContactComponent,
    TopMedalsComponent,
    AthleteDetailsComponent,
    AthleteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    AthletesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
