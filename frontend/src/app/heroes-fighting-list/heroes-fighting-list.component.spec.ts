import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesFightingListComponent } from './heroes-fighting-list.component';

describe('HeroesFightingListComponent', () => {
  let component: HeroesFightingListComponent;
  let fixture: ComponentFixture<HeroesFightingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesFightingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesFightingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
