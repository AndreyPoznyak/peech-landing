import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlowComponent } from './flow/flow.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizStepComponent } from './quiz-step/quiz-step.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { PaywallComponent } from './paywall/paywall.component';

@NgModule({
  declarations: [
    AppComponent,
    FlowComponent,
    QuizComponent,
    QuizStepComponent,
    LoginComponent,
    CheckoutComponent,
    PaywallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //BrowserAnimationsModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
