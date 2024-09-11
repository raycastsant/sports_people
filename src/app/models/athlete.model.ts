
export class Athlete {
  position: number;
  name: string;
  age: number;
  country: string;
  goldMedals: number;
  silverMedals: number;
  bronzeMedals: number;
  sport: string;
  imgUrl: string;
  description: string;
  picture: string;

  constructor() {
    this.position = 0;
    this.name = '';
    this.age = 0;
    this.country = '';
    this.goldMedals = 0;
    this.silverMedals = 0;
    this.bronzeMedals = 0;
    this.sport = '';
    this.imgUrl = '';
    this.description = '';
    this.picture = '';
  }

  getTotalMedals(): number {
    return this.goldMedals + this.silverMedals + this.bronzeMedals;
  }
}
