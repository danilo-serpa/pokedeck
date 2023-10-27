import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxButtonModule, IgxCarouselModule, IgxIconModule, IgxInputGroupModule, IgxRippleModule } from 'igniteui-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutDefaultModule } from './shared/components/layouts/layout-default/layout-default.module';
import { LayoutLoginModule } from './shared/components/layouts/layout-login/layout-login.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxCarouselModule,
    CommonModule,
    HttpClientModule,
    IgxInputGroupModule,
    IgxIconModule,
    IgxButtonModule,
    IgxRippleModule,
    ReactiveFormsModule,
    LayoutDefaultModule,
    LayoutLoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
