export class SportLive {
  title: string;
  date: Date;
  subTitle: string;
  description: string;
  languages: string;
  showDetails: boolean;

  constructor() {
    this.title = '';
    this.date = new Date();
    this.subTitle = '';
    this.description = '';
    this.languages = '';
    this.showDetails = false;
  }
}
