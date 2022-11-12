import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinDialogComponent } from './win-dialog.component';

describe('WinnerDialogComponent', () => {
  let component: WinDialogComponent;
  let fixture: ComponentFixture<WinDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinDialogComponent ]
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
