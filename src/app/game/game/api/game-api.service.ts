import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResultType} from "../model/result.type";
import {GameRoundResultDto} from "../model/game-round-result-dto";

@Injectable({
  providedIn: 'root'
})
export class GameApiService {

  private readonly baseUrl = 'http://localhost:8080/api/v1'

  constructor( private http: HttpClient) { }

  playRound(playerPick: number): Observable<GameRoundResultDto> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('user:password')
      }),
      params: new HttpParams()
        .set('player-pick', playerPick)
    }

    return this.http.get<GameRoundResultDto>(this.baseUrl + '/rockPaperScissor/game/round/play', httpOptions);
  }
}
