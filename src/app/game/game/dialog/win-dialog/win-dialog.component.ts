import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {WinnerType} from "../../model/winner.type";

export interface WinDialogData {
  playerScore: number;
  computerScore: number;
}

@Component({
  selector: 'app-winner-dialog',
  templateUrl: './win-dialog.component.html',
  styleUrls: ['./win-dialog.component.scss']
})
export class WinDialogComponent implements OnInit {

  public winner!: WinnerType;

  constructor(@Inject(MAT_DIALOG_DATA) public data: WinDialogData,
              private dialogRef: MatDialogRef<WinDialogComponent>) {
  }

  ngOnInit(): void {
    this.winner = this.determineWinner();
  }

  private determineWinner(): WinnerType {
    return this.data.playerScore >= 3 ? "YOU" : "COMPUTER"
  }
}
