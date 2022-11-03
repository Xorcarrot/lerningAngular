import { VoteGraphComponent } from './voter/voteGraph/voteGraph.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { CustomCodeComponent } from './customCode/customCode.component';
import { InformatikerComponent } from './informatiker/informatiker.component';
import { VoterComponent } from './voter/voter.component';

@NgModule({
  declarations: [						
    AppComponent,
      StartComponent,
      NavigationbarComponent,
      CustomCodeComponent,
      InformatikerComponent,
      VoterComponent,
      VoteGraphComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
