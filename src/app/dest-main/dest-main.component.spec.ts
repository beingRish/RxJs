import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestMainComponent } from './dest-main.component';

describe('DestMainComponent', () => {
  let component: DestMainComponent;
  let fixture: ComponentFixture<DestMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DestMainComponent]
    });
    fixture = TestBed.createComponent(DestMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
