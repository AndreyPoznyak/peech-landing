import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaywallComponent } from './paywall.component';

describe('PaywallComponent', () => {
  let component: PaywallComponent;
  let fixture: ComponentFixture<PaywallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaywallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaywallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
