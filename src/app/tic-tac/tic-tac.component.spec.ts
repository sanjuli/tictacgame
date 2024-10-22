import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicTacComponent } from './tic-tac.component';

describe('TicTacComponent', () => {
  let component: TicTacComponent;
  let fixture: ComponentFixture<TicTacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicTacComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TicTacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
