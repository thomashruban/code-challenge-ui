import {Component, OnDestroy, OnInit} from '@angular/core';
import {GameApiService} from "./api/game-api.service";
import {ResultEnum} from "./model/result.enum";
import {GameRoundResultDto} from "./model/game-round-result-dto";
import {lastValueFrom} from "rxjs";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {

  public resultDto!: GameRoundResultDto;
  public playerPick!: number;
  public playerWins = 0;
  public computerWins = 0;
  public loading = false;

  constructor(private gameApiService: GameApiService) {
  }

  ngOnInit(): void {
  }

  public async playerChoseWeapon(pick: number): Promise<void> {
    this.loading = true;
    this.playerPick = pick;

    setTimeout( async () => {
      await this.fight(pick);

      if (this.resultDto.roundResult === "WIN") {
        this.playerWins++;
      }
      if (this.resultDto.roundResult === "LOSS") {
        this.computerWins++;
      }

      this.loading = false;
    }, 1500);
  }

  ngOnDestroy(): void {
  }

  private async fight(pick: number): Promise<void> {
    await lastValueFrom(this.gameApiService.playRound(pick))
      .then(data => {
        this.resultDto = data;
      }).catch(err => {
        console.log(err);
      });
  }
}
