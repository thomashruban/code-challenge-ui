import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RockPaperScissorsEnum} from "../model/rock-paper-scissors.enum";

@Injectable({
  providedIn: 'root'
})
export class GameApiService {

  private readonly baseUrl = 'http://localhost:8080/api/v1'

  constructor( private http: HttpClient) { }

  getRandomPick(): Observable<RockPaperScissorsEnum> {
    return this.http.get<RockPaperScissorsEnum>(this.baseUrl + '/rockPaperScissor/game/round/play')
  }
}
