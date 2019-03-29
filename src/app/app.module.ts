import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

// Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import { MaterialModule } from './material';

// Tweets
import { TweetsExistentesComponent } from './Tweets/tweets-existentes/tweets-existentes.component';
import { DetalleTweetComponent } from './tweets/detalle-tweet/detalle-tweet.component';

import { HttpClientModule } from "@angular/common/http";
import { UserInfoComponent } from './usuarios/user-info/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    TweetsExistentesComponent,
    DetalleTweetComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
