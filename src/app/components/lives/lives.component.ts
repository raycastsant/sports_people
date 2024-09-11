import { Component, OnInit } from '@angular/core';
import livesJson from "../../../assets/mock_lives.json";
import { plainToInstance } from 'class-transformer';
import { SportLive } from '../../models/lives.model';

@Component({
  selector: 'app-lives',
  templateUrl: './lives.component.html',
  styleUrl: './lives.component.css'
})
export class LivesComponent implements OnInit {
  title: string = 'Watch live';
  livesJson: any = livesJson; //lives fake data
  sportLives: Array<SportLive> = new Array<SportLive>();

  ngOnInit() {
    this.getLivesData();
  }

  private getLivesData() {
    this.sportLives = plainToInstance(SportLive, this.livesJson as []);
    for (let i = 0; i < this.sportLives.length; i++) {
      this.sportLives[i].date = new Date(+(new Date()) + Math.floor(Math.random() * 1000000000));
    }

    this.sportLives.sort((a, b) => (a.date < b.date ? -1 : 1));
  }
}
