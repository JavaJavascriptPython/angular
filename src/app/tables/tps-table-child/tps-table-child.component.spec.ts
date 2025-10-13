import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpsTableChildComponent } from './tps-table-child.component';

describe('TpsTableChildComponent', () => {
  let component: TpsTableChildComponent;
  let fixture: ComponentFixture<TpsTableChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpsTableChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpsTableChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
