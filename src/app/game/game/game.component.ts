import {Component, OnInit} from '@angular/core';
import {GameApiService} from "./api/game-api.service";
import {GameRoundResultDto} from "./model/game-round-result-dto";
import {lastValueFrom} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {WinDialogComponent, WinDialogData} from "./dialog/win-dialog/win-dialog.component";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  public resultDto!: GameRoundResultDto;
  public playerPick!: number;
  public newGame = true;
  public playerScoreCount = 0;
  public computerScoreCount = 0;
  public loading = false;

  constructor(private dialogService: MatDialog,
              private gameApiService: GameApiService) {
  }

  ngOnInit(): void {
  }

  public playerChoseWeapon(pick: number) {
    this.newGame = false;

    if (!this.loading) {
      this.loading = true;
      this.playerPick = pick;

      setTimeout(async () => {
        await this.fight(pick);

        if (this.resultDto.roundResult === "WIN") {
          this.playerScoreCount++;
        }
        if (this.resultDto.roundResult === "LOSS") {
          this.computerScoreCount++;
        }

        if (this.playerScoreCount >= 3 || this.computerScoreCount >= 3) {
          this.showWinDialog();
        }

        this.loading = false;
      }, 1500);
    }
  }

  private async fight(pick: number): Promise<void> {
    await lastValueFrom(this.gameApiService.playRound(pick))
      .then(data => {
        this.resultDto = data;
      }).catch(err => {
        console.log(err);
      });
  }

  private showWinDialog(): void {
    const dialogData: WinDialogData = {
      playerScore: this.playerScoreCount,
      computerScore: this.computerScoreCount
    }
    const dialogRef = this.dialogService.open(WinDialogComponent, {
      data: dialogData,
      disableClose: true
    }).afterClosed().subscribe(() => {
      this.clearGameData();
    });
  }

  private clearGameData(): void {
    this.playerScoreCount = 0;
    this.computerScoreCount = 0;
    this.playerPick = -1;
    this.resultDto.computerPick = -1;
    this.resultDto.roundResult = "EMPTY";
    this.newGame = true;
  }
}
