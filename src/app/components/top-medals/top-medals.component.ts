import { Component, Inject, OnInit } from '@angular/core';
import { Athlete } from '../../models/athlete.model';
import { DOCUMENT } from '@angular/common';
import { AthletesService } from '../../services/athletes.service';

@Component({
  selector: 'app-top-medals',
  templateUrl: './top-medals.component.html',
  styleUrl: './top-medals.component.css'
})
export class TopMedalsComponent implements OnInit {
  title: string = 'Top Medallists';
  athletes: Array<Athlete> = new Array<Athlete>();
  showDetails: boolean = false;
  selectedAthlete!: Athlete; //used to show an athlete details
  editMode: boolean = false;
  isMobileLayout = false;

  constructor(@Inject(DOCUMENT) private _doc: Document, private athletesService: AthletesService) { }

  private getWindow(): Window | null {
    return this._doc.defaultView;
  }

  ngOnInit() {
    this.checkScreenSize();
    this.getWindow()!.onresize = () => this.checkScreenSize();
    this.athletes = this.athletesService.getAthletesData();
  }

  /**Checks the screen size and set the value of the isMobileLayout
   * property if the screen size is less than 600px */
  private checkScreenSize() {
    this.isMobileLayout = this.getWindow()!.innerWidth <= 600;
  }

  showAthleteDetails(position: number) {
    if (position > 0) {
      this.editMode = false;
      this.selectedAthlete = this.athletes[position - 1];
      console.log(this.editMode);
      this.showDetails = true;
      window.scrollTo(0, 0);
    } else {
      this.selectedAthlete = new Athlete();
      this.showDetails = false;
      this.editMode = false;
    }
  }

  hideDetails(event: any) {
    this.showDetails = false;
  }
}




