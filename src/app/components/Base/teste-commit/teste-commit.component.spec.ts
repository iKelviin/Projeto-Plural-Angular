import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteCommitComponent } from './teste-commit.component';

describe('TesteCommitComponent', () => {
  let component: TesteCommitComponent;
  let fixture: ComponentFixture<TesteCommitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteCommitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesteCommitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
