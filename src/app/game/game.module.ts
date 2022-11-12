import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameComponent} from './game/game.component';
import {GameRoutingModule} from './game-routing.module';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatBadgeModule} from "@angular/material/badge";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatRippleModule} from "@angular/material/core";
import { WinDialogComponent } from './game/dialog/win-dialog/win-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
  declarations: [
    GameComponent,
    WinDialogComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    FontAwesomeModule,
    MatButtonModule,
    MatCardModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatDialogModule,
    MatGridListModule
  ]
})
export class GameModule { }
