import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestListComponent } from './dest-list.component';

describe('DestListComponent', () => {
  let component: DestListComponent;
  let fixture: ComponentFixture<DestListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DestListComponent]
    });
    fixture = TestBed.createComponent(DestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
