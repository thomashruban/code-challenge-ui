import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {GameComponent} from './game.component';
import {GameApiService} from "./api/game-api.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {of} from "rxjs";
import {RoundResultDto} from "./model/round-result-dto";
import {MatDialog, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {WinDialogComponent} from "./dialog/win-dialog/win-dialog.component";

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  let gameApiServiceStub: GameApiService;
  let winDialogStub: MatDialog;

  let roundResultDto: RoundResultDto;

  beforeEach(async () => {
    gameApiServiceStub = {
      playRound: () => of(roundResultDto)
    } as any;

    winDialogStub = <any>{
      open: () => undefined
    };

    await TestBed.configureTestingModule({
      declarations: [GameComponent],
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
        BrowserAnimationsModule
      ],
      providers: [
        {provide: GameApiService, useValue: gameApiServiceStub},
        {provide: MatDialog, useValue: winDialogStub}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // component.playerScoreCount = 0;
    // component.computerScoreCount = 0;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should win round', fakeAsync(() => {
    roundResultDto = {
      computerPick: 0,
      roundResult: 'WIN'
    };

    component.playerChoseWeapon(1);

    tick(1600);

    expect(component.playerScoreCount).toBe(1);
    expect(component.computerScoreCount).toBe(0);
    expect(component.loading).toBeFalsy();
    expect(component.newGame).toBeFalsy();
  }));

  it('should lose round', fakeAsync(() => {
    roundResultDto = {
      computerPick: 0,
      roundResult: 'LOSS'
    };

    component.playerChoseWeapon(1);

    tick(1600);

    expect(component.playerScoreCount).toBe(0);
    expect(component.computerScoreCount).toBe(1);
    expect(component.loading).toBeFalsy();
    expect(component.newGame).toBeFalsy();
  }));

  it('should open dialog and reset game', fakeAsync(() => {
    roundResultDto = {
      computerPick: 0,
      roundResult: 'WIN'
    };

    const dialogRefSpyObj = jasmine.createSpyObj({ afterClosed : of(null), close: null });
    dialogRefSpyObj.componentInstance = { body: '' };
    const dialogOpenSpy = spyOn(winDialogStub, 'open').and.returnValue(dialogRefSpyObj);

    component.playerScoreCount = 2;
    component.computerScoreCount = 2;

    component.playerChoseWeapon(1);

    tick(1600);

    expect(component.playerScoreCount).toBe(0);
    expect(component.computerScoreCount).toBe(0);
    expect(component.playerPick).toBe(-1)
    expect(component.loading).toBeFalsy();
    expect(component.newGame).toBeTruthy();
    expect(component.resultDto.computerPick).toBe(-1);
    expect(component.resultDto.roundResult).toBe('EMPTY');
    expect(dialogOpenSpy).toHaveBeenCalledTimes(1);
  }));
});
