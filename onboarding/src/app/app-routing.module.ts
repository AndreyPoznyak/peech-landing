import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { PaywallComponent } from './paywall/paywall.component';

const routes: Routes = [
  {
    path: '',
    component: QuizComponent,
  }, {
    path: 'checkout',
    component: CheckoutComponent,
  }, {
    path: 'paywall',
    component: PaywallComponent,
  }, {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
