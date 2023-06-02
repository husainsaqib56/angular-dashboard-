import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterContentComponent } from './center-content.component';

describe('CenterContentComponent', () => {
  let component: CenterContentComponent;
  let fixture: ComponentFixture<CenterContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CenterContentComponent]
    });
    fixture = TestBed.createComponent(CenterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
