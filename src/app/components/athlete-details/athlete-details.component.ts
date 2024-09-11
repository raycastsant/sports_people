import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Athlete } from '../../models/athlete.model';

@Component({
  selector: 'app-athlete-details',
  templateUrl: './athlete-details.component.html',
  styleUrl: './athlete-details.component.css'
})
export class AthleteDetailsComponent {
  @Input() editMode: boolean = false;
  @Input() athlete!: Athlete;
  @Output() hideEvent = new EventEmitter();

  hide() {
    this.hideEvent.emit();  //Emit event to the parent component
  }

  hideDetails(event: any) {
    this.hide();
  }
}
