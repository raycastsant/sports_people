import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Athlete } from '../../models/athlete.model';
import { AthletesService } from '../../services/athletes.service';

@Component({
  selector: 'app-athlete-form',
  templateUrl: './athlete-form.component.html',
  styleUrl: './athlete-form.component.css'
})
export class AthleteFormComponent implements OnInit {
  @Input() athlete!: Athlete;
  @Output() hideEvent = new EventEmitter();

  formData: FormGroup = new FormGroup({
    position: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    goldMedals: new FormControl('', [Validators.required]),
    silverMedals: new FormControl('', [Validators.required]),
    bronzeMedals: new FormControl('', [Validators.required]),
    description: new FormControl(''),
  });

  constructor(private athletesService: AthletesService) { }

  ngOnInit(): void {
    if (this.athlete != null) {
      this.formData.patchValue({
        position: this.athlete.position,
        name: this.athlete.name,
        age: this.athlete.age,
        country: this.athlete.country,
        goldMedals: this.athlete.goldMedals,
        silverMedals: this.athlete.silverMedals,
        bronzeMedals: this.athlete.bronzeMedals,
        description: this.athlete.description,
      });
    }
  }

  onSubmit() {
    const data = this.formData.value;
    this.athletesService.updateAthlete(data.position, data.name, data.country, data.age,
      data.goldMedals, data.silverMedals, data.bronzeMedals, data.description);
    this.formData.reset();

    this.hideEvent.emit();
  }
}
