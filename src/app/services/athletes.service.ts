import { Injectable } from '@angular/core';
import athletesJson from "../../assets/mock_athletes.json";
import { Athlete } from '../models/athlete.model';
import { plainToInstance } from 'class-transformer';

@Injectable({
  providedIn: 'root'
})
export class AthletesService {
  private athletesJson: any = athletesJson; //athletes fake data
  private athletes: Array<Athlete> = new Array<Athlete>();

  getAthletesData(): Array<Athlete> {
    if (this.athletes.length == 0) {  //To simulate that the changes made were saved
      this.athletes = plainToInstance(Athlete, this.athletesJson as []);
      this.updatePositions();
    }

    return this.athletes;
  }

  private updatePositions() {
    this.athletes.sort((a, b) => (a.getTotalMedals() > b.getTotalMedals() ? -1 : 1));
    for (let i = 0; i < this.athletes.length; i++) {
      this.athletes[i].position = i + 1;
    }
  }

  updateAthlete(position: number, name: string, country: string, age: number, goldMedals: number,
    silverMedals: number, bronzeMedals: number, description: string) {
    if (position > 0) {
      //send data to API and update
      this.athletes[position - 1].name = name;
      this.athletes[position - 1].country = country;
      this.athletes[position - 1].age = age;
      this.athletes[position - 1].goldMedals = goldMedals;
      this.athletes[position - 1].silverMedals = silverMedals;
      this.athletes[position - 1].bronzeMedals = bronzeMedals;
      this.athletes[position - 1].description = description;
      this.updatePositions();
    }
  }
}
