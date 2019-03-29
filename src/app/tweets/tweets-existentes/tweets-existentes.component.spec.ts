import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetsExistentesComponent } from './tweets-existentes.component';

describe('TweetsExistentesComponent', () => {
  let component: TweetsExistentesComponent;
  let fixture: ComponentFixture<TweetsExistentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetsExistentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetsExistentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
