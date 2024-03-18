import { CdkAccordionModule } from '@angular/cdk/accordion';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AudioTrackComponent } from './components/audio-track/audio-track.component';
import { LandingComponent } from './components/landing/landing.component';

@NgModule({
    declarations: [
        AppComponent,
        LandingComponent,
        AudioTrackComponent,
    ],
    imports: [
        BrowserModule,
        MatCardModule,
        MatButtonModule,
        MatDividerModule,
        MatExpansionModule,
        MatIconModule,
        MatRippleModule,
        CdkAccordionModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}