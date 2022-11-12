import {ResultEnum} from "./result.enum";

export interface GameRoundResultDto {
  computerPick: number;
  roundResult: ResultEnum;
}
