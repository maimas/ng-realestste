import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppMaterialModule} from './@modules/app-material.module';
import {AppGraphqlModule} from './@modules/app-graphql.module';
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {CommonModule} from '@angular/common';
import {TimeagoModule} from 'ngx-timeago';
import { PageNotFoundComponent } from './@pages/page-not-found/page-not-found.component';
import {PipesModule} from './@common/pipes/pipes.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    TimeagoModule.forRoot(),
    AppRoutingModule,
    AppMaterialModule,
    AppGraphqlModule,
    PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
