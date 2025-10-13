import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpsGraphComponent } from './tps-graph.component';

describe('TpsGraphComponent', () => {
  let component: TpsGraphComponent;
  let fixture: ComponentFixture<TpsGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpsGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
