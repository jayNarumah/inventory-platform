import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { UiModule } from '@inventory-platform/ui';
import { LandingComponent } from './main/pages/landing/landing.component';
import { AccessDeniedComponent } from './main/pages/access-denied/access-denied.component';
import { AppState } from './store/app.state';
import { AppLayoutModule } from './main/layout/app.layout.module';
import { appReducer } from './store/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AccessDeniedComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // Angular4PaystackModule.forRoot('pk_test_xxxxxxxxxxxxxxxxxxxxxxxx')
    StoreModule.forRoot<AppState>(appReducer),
    // EffectsModule.forRoot([AppNotificationEffect]),
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25,
    //   logOnly: environment.production,
    //   autoPause: true,
    // }),
    UiModule,
    AppRoutingModule,
    AppLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
