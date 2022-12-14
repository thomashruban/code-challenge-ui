import { TestBed } from '@angular/core/testing';

import { GameApiService } from './game-api.service';
import {HttpClientModule} from "@angular/common/http";

describe('GameApiService', () => {
  let service: GameApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(GameApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
