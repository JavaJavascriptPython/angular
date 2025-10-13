import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpsTableComponent } from './tps-table.component';

describe('TpsTableComponent', () => {
  let component: TpsTableComponent;
  let fixture: ComponentFixture<TpsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
