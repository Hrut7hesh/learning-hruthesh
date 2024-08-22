import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceadminComponent } from './ecommerceadmin.component';

describe('EcommerceadminComponent', () => {
  let component: EcommerceadminComponent;
  let fixture: ComponentFixture<EcommerceadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EcommerceadminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcommerceadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
