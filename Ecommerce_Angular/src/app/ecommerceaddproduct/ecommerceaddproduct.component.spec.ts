import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceaddproductComponent } from './ecommerceaddproduct.component';

describe('EcommerceaddproductComponent', () => {
  let component: EcommerceaddproductComponent;
  let fixture: ComponentFixture<EcommerceaddproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EcommerceaddproductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcommerceaddproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
