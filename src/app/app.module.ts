import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { PageLandingComponent } from './page-landing/page-landing.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    PageLandingComponent,
    PresentationComponent,
    SocialMediaComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
