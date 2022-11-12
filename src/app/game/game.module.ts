import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameComponent} from './game/game.component';
import {GameRoutingModule} from './game-routing.module';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    GameComponent
  ],
    imports: [
        CommonModule,
        GameRoutingModule,
        FontAwesomeModule,
        MatButtonModule,
        MatCardModule
    ]
})
export class GameModule { }
