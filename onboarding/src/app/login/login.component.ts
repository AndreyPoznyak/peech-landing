import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  async loginClicked(provider: 'google' | 'apple' | 'facebook'): Promise<void> {
    switch (provider) {
      case 'apple':
        break;
      case 'facebook':
        break;
      case 'google':
        const user = await this.authService.loginGoogle();

        console.log(user);
        break;
    }
  }
}
