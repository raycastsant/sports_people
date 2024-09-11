import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LivesComponent } from './components/lives/lives.component';
import { ContactComponent } from './components/contact/contact.component';
import { TopMedalsComponent } from './components/top-medals/top-medals.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //default route
  { path: 'home', component: HomeComponent },
  { path: 'lives', component: LivesComponent },
  { path: 'top-medalists', component: TopMedalsComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
