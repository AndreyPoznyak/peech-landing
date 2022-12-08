import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthProviderType, AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  async loginClicked(provider: AuthProviderType): Promise<void> {
    const user = await this.authService.login(provider);

    if (user) {
      console.log(user);
      this.router.navigate(['paywall']);
      return;
    }

    console.log('Error: Failed to login');
    //TODO: show the error modal
  }
}
