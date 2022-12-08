import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paywall',
  templateUrl: './paywall.component.html',
  styleUrls: ['./paywall.component.scss']
})
export class PaywallComponent {
  constructor(private router: Router) {}

  subscribeButtonClicked(): void {
    this.router.navigate(['checkout']);
  }
}
