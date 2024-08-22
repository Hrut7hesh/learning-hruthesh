import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommercemenuComponent } from './ecommercemenu.component';

describe('EcommercemenuComponent', () => {
  let component: EcommercemenuComponent;
  let fixture: ComponentFixture<EcommercemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EcommercemenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcommercemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
