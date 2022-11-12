import {Component, OnDestroy, OnInit} from '@angular/core';
import {GameApiService} from "./api/game-api.service";
import {finalize, firstValueFrom, lastValueFrom, Subject, take, takeUntil} from "rxjs";
import {ResultEnum} from "./model/result.enum";
import {GameRoundResultDto} from "./model/game-round-result-dto";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {

  public roundResult!: GameRoundResultDto;

  constructor(private gameApiService: GameApiService) { }

  ngOnInit(): void {
  }

  public async playRound() {
    this.roundResult = await lastValueFrom(this.gameApiService.playRound(1));

    console.log(this.roundResult);
  }

  ngOnDestroy(): void {
  }
}
