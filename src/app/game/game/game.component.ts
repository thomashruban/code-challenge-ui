import {Component, OnDestroy, OnInit} from '@angular/core';
import {GameApiService} from "./api/game-api.service";
import {finalize, Subject, take, takeUntil} from "rxjs";
import {RockPaperScissorsEnum} from "./model/rock-paper-scissors.enum";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {

  public computerPick = RockPaperScissorsEnum.ROCK;

  constructor(private gameApiService: GameApiService) { }

  ngOnInit(): void {
  }

  public async fightComputer() {
    let test = await this.gameApiService.getRandomPick().toPromise();
    console.log(test)
  }

  ngOnDestroy(): void {
  }
}
