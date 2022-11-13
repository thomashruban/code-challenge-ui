import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinDialogComponent } from './win-dialog.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from "@angular/material/dialog";

describe('WinnerDialogComponent', () => {
  let component: WinDialogComponent;
  let fixture: ComponentFixture<WinDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinDialogComponent ],
      imports: [
        MatDialogModule,
      ],
      providers: [
        { provide: MatDialogRef, useValue: {}},
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
