import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassagemTurnoComponent } from './passagem-turno.component';

describe('PassagemTurnoComponent', () => {
  let component: PassagemTurnoComponent;
  let fixture: ComponentFixture<PassagemTurnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassagemTurnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassagemTurnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
