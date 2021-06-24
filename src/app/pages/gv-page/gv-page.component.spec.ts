import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GvPageComponent } from './gv-page.component';

describe('GvPageComponent', () => {
  let component: GvPageComponent;
  let fixture: ComponentFixture<GvPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GvPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GvPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
